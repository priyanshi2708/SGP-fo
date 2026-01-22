import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
    <AppContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AppContext.Provider>
  )
}
