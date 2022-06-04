import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "teal.900",
        color: "teal.50",
        width: "50%",
        margin: "auto"
      }
    }
  }
})

export default theme