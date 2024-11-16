import { Box } from "@chakra-ui/react";

export const FixedFooter = ({ theme, children, ...rest }) => (
  <Box pos="fixed" w="full" maxW="container.sm" zIndex={2} bottom={0} pb={3} backdropFilter="blur(20px)" {...theme?.footer} {...rest}>
    {children}
  </Box>
)