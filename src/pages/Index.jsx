import { Box, Container, Flex, Text, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex as="nav" bg="gray.100" p={4} mb={8} justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">
          Blank Canvas
        </Text>
        <Box>
          <Link as={RouterLink} to="/" p={2} fontSize="lg">
            Home
          </Link>
          <Link as={RouterLink} to="/about" p={2} fontSize="lg">
            About
          </Link>
        </Box>
      </Flex>
      <Box as="main">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to Your Blank Canvas</Text>
          <Text>Start building your amazing application here.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;