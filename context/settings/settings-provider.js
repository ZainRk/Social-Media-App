"use client";
import { useState } from "react";
import { SettingsContext } from "./settings-context";

export const SettingsContextProvider = ({ children }) => {
    const [settings, setSettings] = useState({
        theme: "light",
    })

    return (
        <SettingsContext.Provider value={{ settings, setSettings}}>
            {children}
        </SettingsContext.Provider>
    )
}