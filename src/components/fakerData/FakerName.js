import { faker } from "@faker-js/faker";
import { useEffect } from "react";

const FakerName = (setName) => {
  let nameArray = [];
  useEffect(() => {
    const fetchName = () => {
      for (let i = 0; i < 12; i++) {
        let nameValue = faker.person.firstName();
        nameArray.push(nameValue);
        setName(nameArray);
      }
    };
    fetchName();
  }, []);
  return;
};

export default FakerName;