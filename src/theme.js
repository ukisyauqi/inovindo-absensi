import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  //remove the blue border for all components
  shadows: {
    outline: "",
  },

  //remove for all Button
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: "",
        },
      },
    },
  },
});
