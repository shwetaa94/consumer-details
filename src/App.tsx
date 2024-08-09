import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerList from './components/ConsumerList';
import CustomerDetails from './components/ConsumerDetails';

// interface Customer {
//   id: number;
//   firstName: string;
//   lastName: string;
//   title: string;
//   address: string;
//   // Add more fields as needed
// }

const App: React.FC = () => {
  const [customers, setCustomers] = useState<any[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<any | null>(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(response => {
        setCustomers(response.data.users);
        setSelectedCustomer(response.data.users[0]); // Default to first customer on load
      })
      .catch(error => console.error('Error fetching customers:', error));
  }, []);

  const handleCustomerSelect = (customer: any) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="flex h-screen">
      <CustomerList customers={customers} onSelect={handleCustomerSelect} selectedCustomer={selectedCustomer} />
      {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
    </div>
  );
};

export default App;
