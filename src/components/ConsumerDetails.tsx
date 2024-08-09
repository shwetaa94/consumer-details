import React, { useEffect, useState } from "react";
import axios from "axios";

interface CustomerDetailsProps {
  customer: any;
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
    <div className="w-[76%] p-6">
      <h2 className="text-xl mb-4">
        <div className="mb-1">
          <strong>Name:</strong>{" "}
          {`My name is ${customer.firstName} ${customer.lastName} and I am ${customer.age} years old, and I am a ${customer.gender} and my blood group is ${customer.bloodGroup}.`}
        </div>
        <div className="mb-1">
          <strong>Address Details:</strong>{" "}
          {`I live in ${customer.address.address}, ${customer.address.city}, ${
            customer.address.state
          }, ${customer.address.country}. I was born on ${new Date(
            customer.birthDate
          ).toLocaleDateString()}.`}
        </div>
        <div className="mb-1">
          <strong>Educational Details:</strong>{" "}
          {`My university is ${customer.university}. I am currently working as a ${customer.company.title} in the ${customer.company.department} department at ${customer.company.name}, located at ${customer.company.address.address}, ${customer.company.address.city}, ${customer.company.address.state}.`}
        </div>
        <div className="mb-1">
          <strong>Physical Description:</strong>{" "}
          {`My height is ${customer.height} cm, and I weight ${customer.weight} kg. I have ${customer.eyeColor} eyes, and my hair is ${customer.hair.color} and ${customer.hair.type}.`}
        </div>
        <div className="mb-1">
          <strong>Contact Info:</strong>{" "}
          {` ${customer.phone} or ${customer.email}. .`}
        </div>
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {photos.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Customer ${customer.id}`}
            className="w-full h-40 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
