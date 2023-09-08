import { faker } from "@faker-js/faker";
import { useEffect } from "react";

const FakerPrice = (setPrices) => {
  let priceArray = [];
  useEffect(() => {
    const fetchPrice = () => {
      for (let i = 0; i < 12; i++) {
        let priceValue = faker.commerce.price({ min: 20, max: 100 });
        priceArray.push(priceValue);
        setPrices(priceArray);
      }
    };
    fetchPrice();
  }, []);
  return;
};

export default FakerPrice;