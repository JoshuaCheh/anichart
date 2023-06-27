import { extendTheme } from "@chakra-ui/react";
import { Colors } from "./colors";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: Colors.moonstone,
      },
    },
  },
  colors: {
    brand: {
      black: Colors.black,
      white: Colors.white,
      lapis: Colors.lapis,
      moonstone: Colors.moonstone,
      powderblue: Colors.powderblue,
    },
  },
});
