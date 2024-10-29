import { Dimensions, PixelRatio } from "react-native";

// Get device dimensions
const { width: SCREEN_WIDTH } = Dimensions.get("window");

// Define a base width from a standard device, like iPhone 11
const BASE_WIDTH = 375;

/**
 * Scales a given size based on device width and pixel density.
 * @param size - The original value (e.g., font size, width, margin)
 * @returns scaled value based on device width and pixel density
 */
export const scaleSize = (size: number) => {
  const scale = SCREEN_WIDTH / BASE_WIDTH;
  const newSize = size * scale;
  return size;
  // Adjust by pixel density for finer control
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
