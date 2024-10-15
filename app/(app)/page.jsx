"use client";
import { useSettingsContext } from '@/context/settings/settings-context'
import React from 'react'

const MainPage = () => {
    const {settings : {theme},
} = useSettingsContext();

  return  <div>MainPage</div>;
  
}

export default MainPage