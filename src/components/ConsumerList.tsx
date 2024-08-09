import React from "react";

interface CustomerListProps {
  customers: any[];
  onSelect: (customer: any) => void;
  selectedCustomer: any | null;
}

const CustomerList: React.FC<CustomerListProps> = ({
  customers,
  onSelect,
  selectedCustomer,
}) => {
  return (
    <div className="w-[24%] border-r border-gray-300 overflow-y-scroll">
      {customers.map((customer) => (
        <div
          key={customer.id}
          onClick={() => onSelect(customer)}
          className={`p-4 cursor-pointer ${
            selectedCustomer?.id === customer.id ? "bg-gray-200" : ""
          }`}
        >
          <h2 className="font-semibold">
            {customer.firstName} {customer.lastName}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
