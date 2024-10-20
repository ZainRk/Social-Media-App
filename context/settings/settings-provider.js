"use client";
import { useState } from "react";
import {  SettingsContext } from "./settings-context";

export function SettingsContextProvider({ children }) {
  const [settings, setSettings] = useState({
    theme: "light",
    isSidebarOpen: true,
  });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}