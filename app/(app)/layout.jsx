import Box from '@/components/Box/Box';
import { SettingsContextProvider } from '@/context/settings/settings-provider';
import ThemeProvider from '@/lib/ThemeProvider';
import React from 'react'
import css from "@/styles/homeLayout.module.css"
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';


const HomeLayout = ({children}) => {
  return ( 
  <SettingsContextProvider>
    <ThemeProvider>
    <Box type='baseBg'
    style={{
      position: "relative", width: "100vw", height: "100vh"
    }}>
     <div className={css.wrapper}>
      {/* Header  */}

      <Header/>

      <div className={css.container}>
        <Sidebar/>

        <div className={css.page_body}>
{children}
        </div>
      </div>
     </div>
    </Box>
    </ThemeProvider>
  </SettingsContextProvider>
  );
}

export default HomeLayout;