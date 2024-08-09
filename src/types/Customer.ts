export interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    birthDate: string; // ISO date string
    address: {
      address: string;
      city: string;
      state: string;
      country: string;
    };
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: {
      color: string;
      type: string;
    };
    ip: string;
    company: {
      department: string;
      name: string;
      title: string;
      address: {
        address: string;
        city: string;
        state: string;
        country: string;
      };
    };
    university: string;
    bank: {
      cardExpire: string;
      cardNumber: string;
      cardType: string;
    };
    macAddress: string;
  }
  