import React from 'react';

const SavedPalettes = ({ palettes }) => {
  return (
    <div className="saved-palettes-container">
      <h2>Saved Palettes</h2>
      <div className="saved-palettes">
        {palettes.map((palette, index) => (
          <div key={index} className="saved-palette">
            {palette.map((color, idx) => (
              <div
                key={idx}
                className="color-block"
                style={{ backgroundColor: color }}
              >
                {color}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedPalettes;
