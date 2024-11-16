import { Box, Spacer } from "@chakra-ui/react";

export const FixedHeader = ({ theme, spacerProps, children, ...rest }) => (
  <>
    <Box pos="fixed" w="full" maxW="container.sm" zIndex={10} top={0} pb={4} {...rest}>
      { children }
    </Box>
    <Spacer h="74px" />
  </>
)