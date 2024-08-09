import React from "react";
import { Customer } from "../types/Customer";

interface CustomerListProps {
  customers: Customer[];
  onSelect: (customer: Customer) => void;
  selectedCustomer: Customer | null;
}

const CustomerList: React.FC<CustomerListProps> = ({
  customers,
  onSelect,
  selectedCustomer,
}) => {
  return (
    <div className="min-w-44 w-[24%] bg-gray-50 border-r border-gray-300  overflow-y-scroll">
      {customers.map((customer) => (
        <div
          key={customer.id}
          onClick={() => onSelect(customer)}
          className={`p-4 cursor-pointer ${
            selectedCustomer?.id === customer.id ? "bg-gray-200" : ""
          }`}
        >
          <div className="px-3 text-justify">
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl mb-2 font-semibold">
              {customer.firstName} {customer.lastName}
            </h2>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl">
              <p className="h-11  md:h-20 leading-tight tracking-tight overflow-hidden hidden md:block">
                {`My name is ${customer.firstName} ${customer.lastName}, I am ${customer.age} years old, a ${customer.gender}, my blood group is ${customer.bloodGroup}, and 
                I live in ${customer.address.address}, ${customer.address.state}`}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
