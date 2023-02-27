export interface Iproduct {
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
  price_id: string;
  quantity: number;
}
export interface IproductInfo {
  description: string;
  id: number;
  image: string;
  name: string;
  nutrition: {
    carbs: number;
    fat: number;
    protein: number;
    salt: number;
  };
  price: number;
  price_id: string;
  storage: string;
  quantity: number;
}
