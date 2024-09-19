"use client";

import React from "react";
import { useThemeStore } from "../theme/theme.store";
import styled from "styled-components";

//#region styles
export const StyledThemeSelector = styled.select`
  display: inline-block;
  background-color: transparent;

  option {
    background-color: ${({ theme }) => theme.Secondary.Color};
  }
`;
//#endregion

export default function ThemeSelector() {
  const { allThemes, selectedTheme, setTheme } = useThemeStore(
    (state) => state
  );

  const handleTheme = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const newThemeSelected = allThemes.find(
      (theme) => theme.ThemeName === evt.target.value
    );
    if (newThemeSelected) setTheme(newThemeSelected);
  };

  return (
    <StyledThemeSelector
      value={selectedTheme.ThemeName}
      onChange={(evt) => handleTheme(evt)}
    >
      {allThemes &&
        allThemes.map((_theme) => (
          <option key={_theme.ThemeName} value={_theme.ThemeName}>
            {_theme.ThemeName}
          </option>
        ))}
    </StyledThemeSelector>
  );
}
