import { createContext, useState } from "react";
import { InventoryItem } from "./src/navigation/types";
import MOCK_DATA from "./mockdata.json";

export const DataContext = createContext(null);

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState<InventoryItem[]>(MOCK_DATA);

  const updateData = (newData: InventoryItem) => {
    setData([newData, ...data]);
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};
