/** @type { import('@storybook/react-webpack5').Preview } */
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider value={defaultSystem}>
        <Story/>
      </ChakraProvider>
    ),
  ],
};

export default preview;