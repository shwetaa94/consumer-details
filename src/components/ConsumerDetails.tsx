import React, { useEffect, useState } from "react";
import axios from "axios";
import { Customer } from "../types/Customer";

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [photos, setPhotos] = useState<string[]>([]);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=30"
      );
      // Select a random 9 photos from the response
      const randomPhotos = response.data.products
        .sort(() => 0.5 - Math.random())
        .slice(0, 9)
        .map((photo: any) => photo.thumbnail);

      setPhotos(randomPhotos);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
    const intervalId = setInterval(fetchPhotos, 10000);

    return () => clearInterval(intervalId);
  }, [customer]);

  return (
    <div className="w-full sm:w-full md:w-[76%] p-6 bg-gray-100">
      <div className="text-sm sm:text-base md:text-lg lg:text-xl text-justify">
        <div className="w-full text-center text-5xl font-bold my-4 mb-6">
          {customer.firstName} {customer.lastName}
        </div>
        <div className="mb-1 px-6 my-4  text-center">
          {`My name is ${customer.firstName} ${customer.lastName} and I am ${customer.age} years old, and I am a ${customer.gender} and my blood group is ${customer.bloodGroup}.`}
          {`I live in ${customer.address.address}, ${customer.address.city}, ${
            customer.address.state
          }, ${customer.address.country}. I was born on ${new Date(
            customer.birthDate
          ).toLocaleDateString()}.`}
          {`My university is ${customer.university}. I am currently working as a ${customer.company.title} in the ${customer.company.department} department at ${customer.company.name}, located at ${customer.company.address.address}, ${customer.company.address.city}, ${customer.company.address.state}.`}
          {`My height is ${customer.height} cm, and I weight ${customer.weight} kg. I have ${customer.eyeColor} eyes, and my hair is ${customer.hair.color} and ${customer.hair.type}. ${customer.phone} or ${customer.email}.`}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
        {photos.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Customer ${customer.id}`}
            className="w-full h-40 py-4 p-4 rounded-md bg-white object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
