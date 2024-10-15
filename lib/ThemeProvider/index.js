"use client";

import { useSettingsContext } from "@/context/settings/settings-context";
import { ConfigProvider, theme } from "antd";
import { useCallback } from "react";

const ThemeProvider = ({ children }) => {
  
  
  const {settings : {
    theme : globalTheme
  }}  = useSettingsContext();

const BoxBg = useCallback(() => {
    return globalTheme === "dark" ? "rgb(33, 43, 54)" : "white"
}, [globalTheme]);


const BaseBg = useCallback(() => {
    return globalTheme === "dark" ? "#1B1B1B" : "#F4F6F8"
}, [globalTheme]);

return (
    <ConfigProvider
      theme={{
        algorithm:
          globalTheme === "light"
            ? theme.defaultAlgorithm
            : theme.darkAlgorithm,
        token: {
          fontFamily: 'inherit',
          colorPrimary: "#F9AA11",
          boxBg: BoxBg(),
          baseBg: BaseBg(),
        },
        components: {
          Typography: {
            fontSize: 'none',
            lineHeight: 'none',
            fontWeightStrong: 'none',
          }
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;