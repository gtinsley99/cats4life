import { faker } from "@faker-js/faker";
import { useEffect } from "react";

const FakerPrice = (prices, setPrices) => {
  useEffect(() => {
    const fetchPrice = () => {
      for (let i = 0; i < 12; i++) {
        let priceValue = faker.commerce.price({ min: 20, max: 30 });
        let priceArray = [...prices];
        priceArray.push(priceValue);
        setPrices(priceArray);
      }
    };
    fetchPrice();
  }, []);
  return;
};

export default FakerPrice;
