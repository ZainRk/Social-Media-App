import Box from '@/components/Box/Box';
import { SettingsContextProvider } from '@/context/settings/settings-provider';
import ThemeProvider from '@/lib/ThemeProvider';
import React from 'react'

const HomeLayout = ({children}) => {
  return ( 
  <SettingsContextProvider>
    <ThemeProvider>
    <Box type='baseBg'
    style={{
      position: "relative", width: "100vw", height: "100vh"
    }}>
      <div>This is Layout</div>
    </Box>
    </ThemeProvider>
  </SettingsContextProvider>
  );
}

export default HomeLayout;