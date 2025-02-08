"use client"

import { createContext, useState } from "react";

export const ClientContextProvider = createContext({});

const GlobalContext = ({children}) => {

    const [fileName, setFileName] = useState(false)
    const [processCount, setProcessCount] = useState(1)
  return (
    <ClientContextProvider.Provider value={{fileName, setFileName, processCount, setProcessCount}}>
      {children}
    </ClientContextProvider.Provider>
  )
}

export default GlobalContext
