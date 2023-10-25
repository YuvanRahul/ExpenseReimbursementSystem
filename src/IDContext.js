// IDContext.js
import React, { createContext, useState, useContext } from 'react';

const IDContext = createContext();

export function IDProvider({ children }) {
  const [id, setId] = useState(null);

  return (
    <IDContext.Provider value={{ id, setId }}>
      {children}
    </IDContext.Provider>
  );
}

export function useID() {
  return useContext(IDContext);
}
