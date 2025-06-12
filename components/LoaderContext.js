"use client";
import React, { createContext, useContext, useState } from 'react';

const LoaderContext = createContext();

export function LoaderProvider({ children }) {
  const [show, setShow] = useState(false);
  return (
    <LoaderContext.Provider value={{ show, setShow }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  return useContext(LoaderContext);
}
