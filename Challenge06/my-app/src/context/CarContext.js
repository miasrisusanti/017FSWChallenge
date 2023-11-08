import {createContext, useState, useEffect } from "react";

export const CarContext = createContext()

export default function UseCarContext({children}) {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCars = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.json"
      );
      const data = await res.json();
      setCars(data);
    };
    void getCars();
  }, []);
  return (
    <CarContext.Provider value={cars}>
      {children}
    </CarContext.Provider>
  )
}