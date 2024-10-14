import { SettingsContextProvider } from '@/context/settings/settings-provider'
import React from 'react'

const HomeLayout = ({ children }) => {
  return ( <SettingsContextProvider>
    <div>{children}</div>
    </SettingsContextProvider>
  )
}

export default HomeLayout