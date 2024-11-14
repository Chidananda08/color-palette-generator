import React, { useState, useEffect } from 'react';
import ColorPalette from './components/ColorPalette';
import SavedPalettes from './components/SavedPalettes';
import { generateRandomColor } from './utils';

const App = () => {
  const [currentPalette, setCurrentPalette] = useState([]);
  const [savedPalettes, setSavedPalettes] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedPalettes'));
    if (saved) setSavedPalettes(saved);
  }, []);

  const generatePalette = () => {
    const newPalette = Array.from({ length: 5 }, generateRandomColor);
    setCurrentPalette(newPalette);
  };

  const savePalette = () => {
    const updatedPalettes = [...savedPalettes, currentPalette];
    setSavedPalettes(updatedPalettes);
    localStorage.setItem('savedPalettes', JSON.stringify(updatedPalettes));
  };

  return (
    <div className="app-container">
      <h1>Color Palette Generator</h1>
      <button id="generateButton" onClick={generatePalette}>Generate Palette</button>
      {currentPalette.length > 0 && (
        <>
          <ColorPalette palette={currentPalette} />
          <button id="saveButton" onClick={savePalette}>Save Palette</button>
        </>
      )}
      <SavedPalettes palettes={savedPalettes} />
    </div>
  );
};

export default App;
