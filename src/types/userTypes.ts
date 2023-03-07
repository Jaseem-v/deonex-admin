export type UserManager = {
    id: string;
    avatarUrl: string;
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    country: string;
    state: string;
    city: string;
    zipCode: string;
    status: string;
  };

export type ProductType = {
    id: string;
    avatarUrl: string;
    name: string;
    model: string;
    brand: string;
    information: string;
    actual_price: number;
    sale_price: number;
    discount: number;
    quantity: number;
    status: string;
    visibility:string;

  };
export type BannerTypes = {
    id: string;
    avatarUrl: string;
    status: string;
    visibility:string
  };
export type CategoryTypes = {
    id: string;
    name:string;
    avatarUrl: string;
    status: string;
    visibility:string
  };
export type AdminTypes = {
    id: string;
    name:string;
    email: string;
    password: string;
    phone:string;
    role:string;
  };