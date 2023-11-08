import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export default function UseFilterContext({children}) {
    const [filterCar, setFilterCar] = useState([]);
    return (
        <FilterContext.Provider value={[filterCar, setFilterCar]}>
            {children}
        </FilterContext.Provider>
    )
}