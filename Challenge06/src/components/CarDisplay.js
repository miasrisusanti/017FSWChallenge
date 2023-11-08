import React, {useContext} from "react";
import Car from "./Car";
import { FilterContext } from "../context/FilterContext"

const CarDisplay = () => {
  const [filterCar, setFilterCar] = useContext(FilterContext);

  if (filterCar === null || filterCar.length === 0) {
    return (
      <p className="text-center my-5">Mobil belum tersedia. Silakan cari terlebih dahulu.</p>
    );
  }
  
  return (
    <div id="cars-container">
      {filterCar.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarDisplay;
