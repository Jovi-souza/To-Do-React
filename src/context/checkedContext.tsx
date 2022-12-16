import { createContext, ReactNode, useState } from 'react'

interface CheckType {
  checked: string
  isChecked: () => void
}

interface childrenProps {
  children: ReactNode
}

export const CheckContext = createContext({} as CheckType)

export function CheckContextProvider({ children }: childrenProps) {
  const [checked, setChecked] = useState('unchecked')

  function isChecked() {
    setChecked((state) => (state === 'unchecked' ? 'checked' : 'unchecked'))
  }

  return (
    <CheckContext.Provider
      value={{
        checked,
        isChecked,
      }}
    >
      {children}
    </CheckContext.Provider>
  )
}
