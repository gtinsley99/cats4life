import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";


const FakerPrice = (setPrices, prices) => {

    for(let i = 0; i < 12; i++) {
        let priceValue = faker.commerce.price({ min: 20, max: 30 }); 
        let priceArray = [... prices];
        priceArray.push(priceValue);
        setPrices(priceArray)
    }
}

export default FakerPrice;