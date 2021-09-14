import { Link } from "react-router-dom";
import { Flex, Box, Stack } from "@chakra-ui/react";

function Nav() {
  return (
    <Flex
      align="center"
      justify="space-between"
      h="10vh"
      bgColor="tertiary.800"
      color="secondary.500"
    >
      <Box fontSize={["20px", "36px", "36px"]} fontWeight="bold" px="5vw">
        <Link to="/">#glen</Link>
      </Box>

      <Stack
        px="5vw"
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
