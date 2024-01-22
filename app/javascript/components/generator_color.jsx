import React, {useEffect, useState} from "react";
import tinycolor from "tinycolor2";
import Color from "./pallet/color";

export default function GeneratorColor(props) {
  const [baseColor, setBaseColor] = useState(generateRandomColor());
  const [numColors, setNumColors] = useState(5);
  const [colorPalette, setColorPalette] = useState(generateColorScheme(baseColor, numColors));
  useEffect(() => {
    window.removeEventListener('keydown', handleKeyPress);
    window.addEventListener('keydown', handleKeyPress);
  }, []);

  const handleRemoveColor = (colorId) => {
    const updatedBlocks = colorPalette.filter((color) => color.id !== colorId);
    if (updatedBlocks.length === 2) {
      for(let i = 0; i < updatedBlocks.length; i++) {
        updatedBlocks[i].visible_button = false
      }
    }
    setColorPalette(updatedBlocks);
    setNumColors((prevNumColors) => prevNumColors - 1);
  }

  const handleKeyPress = (e) => {
    if (e.code === 'Space') {
      handleRandomizeColor()
    }
  };

  function generateRandomColor() {
    const randomColor = tinycolor.random().toHexString();
    return tinycolor(randomColor).toString();
  }

  function generateColorScheme(baseColor, numColors) {
    const baseHsl = tinycolor(baseColor).toHsl();
    const hueShiftForceMin = 25
    const hueShiftForceMax = 50
    const hueShiftForce = Math.random() * (hueShiftForceMax - hueShiftForceMin) + hueShiftForceMin

    return Array.from({length: numColors}, (_, i) => {
      const hueShift = (i + 20) * hueShiftForce; // Разница в градусах между аналогичными цветами
      const analogousHue = (baseHsl.h + hueShift) % 360;
      const colorHex = tinycolor({ h: analogousHue, s: baseHsl.s, l: baseHsl.l }).toHexString();
      const colorHexWithoutHash = colorHex.substring(1);

      return {
        id: i + 1, // Уникальный номер
        color: colorHex, // Цвет в формате Hex
        luminance: baseHsl.l, //Яркость цвета
        hex_color: colorHexWithoutHash, // Hex без символа #
        visible_button: numColors > 2
      };
    });
  }

  const handleRandomizeColor = () => {
    const newBaseColor = generateRandomColor();
    setBaseColor(newBaseColor);
    setNumColors((prevNumColors) => {
      setColorPalette(generateColorScheme(newBaseColor, prevNumColors));
      return prevNumColors;
    });
  };

  return (<>
            {colorPalette.map(color =>
              <Color color={color} key={color.id} destroy_function={handleRemoveColor} />
            )}
          </>
  );
};