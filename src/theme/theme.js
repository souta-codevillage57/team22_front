import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "teal.900",
        color: "teal.100"
      }
    }
  }
})

export default theme