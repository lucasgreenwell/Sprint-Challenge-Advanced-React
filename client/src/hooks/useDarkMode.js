import React, { useEffect } from "react";

import useLocalStorage from "./useLocalStorage";

const useDarkMode = key => {
  const [darkModeValue, setDarkModeValue] = useLocalStorage("darkmode");
  useEffect(() => {
    const body = document.querySelector("body");
    if (darkModeValue == true) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
       const cards = document.querySelectorAll(".card");
    if (darkModeValue == true) {
      cards.forEach(card => {
        card.classList.add("dark-mode-card")
      });
    } else {
      cards.forEach(card => {
        card.classList.remove("dark-mode-card")
      })
    }
  });

  return [darkModeValue, setDarkModeValue]
};

export default useDarkMode;