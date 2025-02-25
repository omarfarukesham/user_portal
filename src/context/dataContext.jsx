/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const dataContext = createContext();
dataContext.displayName = 'dataContext';

export const useDataContext = () => {
  const context = useContext(dataContext);
  if (!context) {
    throw new Error('useDataContext must be used within an DataProvider');
  }
  return context;
};

const DataProvider = ({ children, initialData = {} }) => {
  const [data, setData] = useState(initialData);

  const contextValue = { data, setData };

  return (
    <dataContext.Provider value={contextValue}>{children}</dataContext.Provider>
  );
};

export default DataProvider;
