import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import BillSummary from './components/BillSummary';
import Header from './components/Header';
import BillTabs from './components/BillTabs';
import HistoryModal from './components/HistoryModal';
import MenuModal from './components/MenuModal';
import CutleryIcon from './components/icons/CutleryIcon';
import { OrderItem, Bill, RestaurantDetails, CompletedBill, MenuItem } from './types';
import { useTheme } from './theme-context'; // Keep this import for theme usage

const App: React.FC = () => {
  // Global Receipt Counter (continuous, never resets)
  const [globalReceiptCounter, setGlobalReceiptCounter] = useState<number>(() => {
    const savedCounter = localStorage.getItem('globalReceiptCounter');
    return savedCounter ? parseInt(savedCounter, 10) : 1;
  });

  // Daily Paid Bill Sequence (resets daily)
  const [nextPaidBillSequence, setNextPaidBillSequence] = useState<number>(() => {
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const savedLastResetDate = localStorage.getItem('lastPaidBillResetDate');
    const savedNextPaidSequence = localStorage.getItem('nextPaidBillSequenceLocal');

    if (savedLastResetDate === today) {
      return savedNextPaidSequence ? parseInt(savedNextPaidSequence, 10) : 1;
    } else {
      // It's a new day or no reset date saved, reset to 1 and update localStorage
      localStorage.setItem('lastPaidBillResetDate', today);
      localStorage.setItem('nextPaidBillSequenceLocal', '1');
      return 1;
    }
  });

  // Effect to persist globalReceiptCounter
  useEffect(() => {
    localStorage.setItem('globalReceiptCounter', globalReceiptCounter.toString());
  }, [globalReceiptCounter]);

  // Helper to generate globally continuous receipt number
  const generateGlobalReceiptNumber = useCallback(() => {
    const currentCounter = globalReceiptCounter;
    const formattedCounter = String(currentCounter).padStart(10, '0'); // Format to 10 digits
    setGlobalReceiptCounter(prev => prev + 1); // Increment for next time
    return `RCPT-${formattedCounter}`;
  }, [globalReceiptCounter]);

  // Ref for the internal bill number counter for active tabs (e.g., "Bill 1", "Bill 2")
  const nextBillNumberRef = useRef(2);

  const createNewBill = useCallback((billNumber: number): Bill => ({
    id: self.crypto.randomUUID(),
    name: `Bill ${billNumber}`,
    billNumber,
    receiptNumber: generateGlobalReceiptNumber(), // Use the new global receipt number
    items: [],
  }), [generateGlobalReceiptNumber]);

  const [bills, setBills] = useState<Bill[]>(() => [createNewBill(1)]);
  const [activeBillId, setActiveBillId] = useState<string>(bills[0].id);
  const [discount, setDiscount] = useState<number>(0);
  const [nextCustomItemId, setNextCustomItemId] = useState(10000);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [history, setHistory] = useState<CompletedBill[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [restaurantDetails, setRestaurantDetails] = useState<RestaurantDetails>({
    name: 'Sunrise Cafe',
    address: 'Mid Baneshwor',
    phone: 'Tel: 555-123-4567',
  });

  const filteredBills = useMemo(() => {
    return bills.filter(bill =>
        bill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [bills, searchQuery]);

  useEffect(() => {
    const activeBillIsFiltered = !filteredBills.some(b => b.id === activeBillId);
    if (activeBillIsFiltered && filteredBills.length > 0) {
        setActiveBillId(filteredBills[0].id);
    }
  }, [filteredBills, activeBillId]);

  const activeBill = bills.find(b => b.id === activeBillId) || bills[0];

  const updateBillItems = (billId: string, updatedItems: OrderItem[]) => {
    setBills(prevBills => prevBills.map(b => 
      b.id === billId ? { ...b, items: updatedItems } : b
    ));
  };

  const handleAddItem = useCallback((item: MenuItem, quantity: number = 1) => {
    if (!activeBill) return;

    const existingItem = activeBill.items.find(
      (orderItem) => orderItem.id === item.id
    );

    let newItems;
    if (existingItem) {
      newItems = activeBill.items.map((orderItem) =>
        orderItem.id === existingItem.id
          ? { ...orderItem, quantity: orderItem.quantity + quantity }
          : orderItem
      );
    } else {
      const newItem: OrderItem = { ...item, quantity };
      newItems = [...activeBill.items, newItem];
    }
    updateBillItems(activeBill.id, newItems);
  }, [activeBill]);

  const handleCustomAddItem = useCallback((name: string, price: number, quantity: number = 1) => {
    if (!activeBill) return;
    const trimmedName = name.trim();
    const existingItem = activeBill.items.find(
      (orderItem) => orderItem.name.trim().toLowerCase() === trimmedName.toLowerCase()
    );

    let newItems;
    if (existingItem) {
      // Item with same name exists, just update quantity
      newItems = activeBill.items.map((orderItem) =>
        orderItem.id === existingItem.id
          ? { ...orderItem, quantity: orderItem.quantity + quantity }
          : orderItem
      );
    } else {
      // It's a new item
      const newItem: OrderItem = {
        id: nextCustomItemId,
        name: trimmedName,
        price,
        quantity,
        category: 'Custom',
        image: `https://picsum.photos/seed/${encodeURIComponent(trimmedName)}/400/300`,
      };
      newItems = [...activeBill.items, newItem];
      setNextCustomItemId(prev => prev + 1);
    }
    updateBillItems(activeBill.id, newItems);
  }, [activeBill, nextCustomItemId]);

  const handleUpdateQuantity = useCallback((itemId: number, newQuantity: number) => {
    if (!activeBill) return;
    let newItems;
    if (newQuantity <= 0) {
      newItems = activeBill.items.filter((item) => item.id !== itemId);
    } else {
      newItems = activeBill.items.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
    }
    updateBillItems(activeBill.id, newItems);
  }, [activeBill]);
  
  const handleRemoveItem = useCallback((itemId: number) => {
    if (!activeBill) return;
    const newItems = activeBill.items.filter((item) => item.id !== itemId);
    updateBillItems(activeBill.id, newItems);
  }, [activeBill]);

  const handleClearOrder = useCallback(() => {
    if (!activeBill) return;

    setBills(prevBills => prevBills.map(b => 
      b.id === activeBill.id 
        ? { ...b, items: [], name: `Bill ${b.billNumber}` } 
        : b
    ));
    
    setDiscount(0);
  }, [activeBill]);

  const handleAddBill = useCallback(() => {
    const newBill = createNewBill(nextBillNumberRef.current);
    setBills(prev => [...prev, newBill]);
    setActiveBillId(newBill.id);
    nextBillNumberRef.current += 1;
    setSearchQuery('');
  }, [createNewBill]);

  const handleSelectBill = useCallback((billId: string) => {
    setActiveBillId(billId);
  }, []);

  const handleCloseBill = useCallback((billId: string) => {
    setBills(prev => {
        const remainingBills = prev.filter(b => b.id !== billId);
        if (remainingBills.length === 0) {
            nextBillNumberRef.current = 2; // Reset bill numbering for active tabs
            const newBill = createNewBill(1);
            setActiveBillId(newBill.id);
            return [newBill];
        }
        if (activeBillId === billId) {
            setActiveBillId(remainingBills[0].id);
        }
        return remainingBills;
    });
  }, [activeBillId, createNewBill]);
  
  const handleUpdateBillName = useCallback((billId: string, newName: string) => {
    const trimmedNewName = newName.trim();
    if (!trimmedNewName) return; // Don't allow empty names

    const isNameTaken = bills.some(b => b.id !== billId && b.name.toLowerCase() === trimmedNewName.toLowerCase());
    if (isNameTaken) {
        alert(`The name "${trimmedNewName}" is already in use. Please choose a different name.`);
        return;
    }

    setBills(prevBills => prevBills.map(b =>
      b.id === billId ? { ...b, name: trimmedNewName } : b
    ));
  }, [bills]);

  const handleUpdateRestaurantDetails = useCallback((newDetails: Partial<RestaurantDetails>) => {
    setRestaurantDetails(prev => ({ ...prev, ...newDetails }));
  }, []);

  const handlePayBill = useCallback(() => {
    if (!activeBill || activeBill.items.length === 0) return;

    const subtotal = activeBill.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const finalTotal = Math.max(0, subtotal - discount);

    const currentPaidBillNumber = String(nextPaidBillSequence).padStart(3, '0'); // Format to 3 digits

    const completedBill: CompletedBill = {
      id: activeBill.id,
      name: activeBill.name,
      receiptNumber: activeBill.receiptNumber,
      items: activeBill.items,
      paidAt: new Date().toISOString(),
      subtotal,
      discount,
      finalTotal,
      paidBillNumber: currentPaidBillNumber, // Assign the daily-resetting sequential number
    };

    setHistory(prev => [completedBill, ...prev]);
    setNextPaidBillSequence(prev => {
      const newSequence = prev + 1;
      localStorage.setItem('nextPaidBillSequenceLocal', newSequence.toString()); // Persist for the day
      return newSequence;
    });
    handleCloseBill(activeBill.id);
    setDiscount(0);
  }, [activeBill, discount, handleCloseBill, nextPaidBillSequence, setNextPaidBillSequence]);

  return (
    <div className="min-h-screen bg-background font-sans text-text transition-colors duration-300"> {/* Use theme classes directly */}
      <Header 
        details={restaurantDetails} 
        onUpdate={handleUpdateRestaurantDetails}
        onOpenHistory={() => setIsHistoryModalOpen(true)}
      />
      <main className="container mx-auto p-4 lg:p-8">
        <div className="max-w-2xl mx-auto">
          <BillTabs
            bills={filteredBills}
            activeBillId={activeBillId}
            onSelectBill={handleSelectBill}
            onAddBill={handleAddBill}
            onCloseBill={handleCloseBill}
            onUpdateBillName={handleUpdateBillName}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          {filteredBills.length > 0 && activeBill ? (
                <BillSummary
                key={activeBill.id}
                receiptNumber={activeBill.receiptNumber}
                billName={activeBill.name}
                restaurantDetails={restaurantDetails}
                items={activeBill.items}
                discount={discount}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                onClearOrder={handleClearOrder}
                onDiscountChange={setDiscount}
                onAddItem={handleAddItem}
                onCustomAddItem={handleCustomAddItem}
                onPayBill={handlePayBill}
              />
            ) : (
              <div className="bg-card-background rounded-xl shadow-lg p-6 text-center text-text-muted">
                <p>No bills match your search.</p>
              </div>
            )}
          </div>
        </main>

        <button
          onClick={() => setIsMenuModalOpen(true)}
          className="fixed bottom-8 right-8 bg-primary text-text-button rounded-full p-4 shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary z-30"
          aria-label="Open menu"
        >
          <CutleryIcon />
        </button>

        <MenuModal
          isOpen={isMenuModalOpen}
          onClose={() => setIsMenuModalOpen(false)}
          onAddItem={handleAddItem}
        />

        <HistoryModal
          isOpen={isHistoryModalOpen}
          onClose={() => setIsHistoryModalOpen(false)}
          history={history}
        />
      </div>
  );
};

export default App;