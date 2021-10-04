import { v4 as uuidv4 } from "uuid";
const payments = [
  {
    id: uuidv4(),
    value: "school fees (private schools)",
    price: 3500
  },
  {
    id: uuidv4(),
    value: "plateau health subscription",
    price: 7000
  },
  {
    id: uuidv4(),
    value: "ESUT payments",
    price: 10000
  },
  {
    id: uuidv4(),
    value: "ESCET Payment",
    price: 12000
  },
  {
    id: uuidv4(),
    value: "IMT Payments",
    price: 6300
  },
  {
    id: uuidv4(),
    value: "GOUNI payments",
    price: 89200
  },
  {
    id: uuidv4(),
    value: "safePay topup",
    price: 4000
  },
];
export default payments;
