import React from 'react';
import './ColorPalette.css';

const ColorPalette = ({ palette }) => {
  return (
    <div className="palette-container">
      {palette.map((color, index) => (
        <div
          key={index}
          className="color-block"
          style={{ backgroundColor: color }}
        >
          {color}
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
