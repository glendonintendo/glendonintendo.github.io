import { Link, NavLink } from "react-router-dom";
import { Flex, Box, Button, Stack, useColorMode } from "@chakra-ui/react";

function Nav() {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex w="100vw" align="center" justify="space-around" h="10vh">
      <Button bg="transparent" onClick={toggleColorMode}>
        #glen
      </Button>

      <Stack
        justify="center"
        align="center"
        isInline
        spacing={[2, 4, 8, 20]}
        fontSize={["16px", "20px", "24px"]}
      >
        <Box>
          <Link to="/about">.about</Link>
        </Box>
        <Box>
          <Link to="/portfolio">.portfolio</Link>
        </Box>
        <Box>
          <Link to="/contact">.contact</Link>
        </Box>
        <Box>
          <Link to="/resume">.resume</Link>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Nav;
