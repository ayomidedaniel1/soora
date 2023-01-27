import { extendTheme } from "native-base";

export const theme = extendTheme({
  fontConfig: {
    Poppins: {
      400: {
        normal: "Inter_400Regular",
      },
      500: {
        normal: "Inter_500Medium",
      },
      600: {
        normal: "Inter_600SemiBold",
      },
      700: {
        normal: "Inter_700Bold",
      },
    },
  },

  fonts: {
    heading: "Inter",
    body: "Inter",
    mono: "Inter",
  },
});
