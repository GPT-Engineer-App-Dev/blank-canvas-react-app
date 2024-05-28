import { Box, Container, Flex, Text, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useFoo } from "../integrations/supabase/index.js";

const Index = () => {
  const { data, error, isLoading } = useFoo();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

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
        {data && data.map((foo) => (
            <Box key={foo.id} p={4} bg="gray.50" borderRadius="md" w="100%">
              <Text fontSize="lg">{foo.title}</Text>
              {foo.bars && foo.bars.map((bar) => (
                <Text key={bar.id} fontSize="sm" color="gray.500">{bar.id}</Text>
              ))}
            </Box>
          ))}
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;