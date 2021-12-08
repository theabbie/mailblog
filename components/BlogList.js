import React from "react";
import {
  Box,
  Flex,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import config from "./config";

function BlogTags(props) {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
}

function BlogAuthor(props) {
  return (
    <Flex
      marginTop="2"
      spacing="2"
      display="flex"
      alignItems="center"
      direction={{ base: "column", md: "row" }}
    >
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text display={{ base: "none", md: "inline" }}>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </Flex>
  );
}

export default function BlogList({ blogs }) {
  const bgGradient = useColorModeValue(
    "radial(orange.600 1px, transparent 1px)",
    "radial(orange.300 1px, transparent 1px)"
  );
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">{config.blogListHeading}</Heading>
      {blogs.map(
        ({ blog_id, blog_title, blog_description, blog_author, blog_date }) => (
          <Box
            marginTop={{ base: "1", sm: "5" }}
            display="flex"
            key={blog_id}
            flexDirection={{ base: "column", sm: "row" }}
            justifyContent="space-between"
          >
            <Box
              display="flex"
              flex="1"
              marginRight="3"
              position="relative"
              alignItems="center"
            >
              <Box
                width={{ base: "100%", sm: "85%" }}
                zIndex="2"
                marginLeft={{ base: "0", sm: "5%" }}
                marginTop="5%"
              >
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image
                    borderRadius="lg"
                    src={
                      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                    }
                    alt="some good alt text"
                    objectFit="contain"
                  />
                </Link>
              </Box>
              <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                  bgGradient={bgGradient}
                  backgroundSize="20px 20px"
                  opacity="0.4"
                  height="100%"
                />
              </Box>
            </Box>
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={{ base: "3", sm: "0" }}
            >
              <BlogTags tags={["Engineering", "Product"]} />
              <Heading marginTop="1">
                <Link
                  textDecoration="none"
                  href={"/blog/" + blog_id}
                  _hover={{ textDecoration: "none" }}
                >
                  {blog_title}
                </Link>
              </Heading>
              <Text as="p" marginTop="2" color={textColor} fontSize="lg">
                {blog_description}
              </Text>
              <BlogAuthor name={blog_author} date={new Date(blog_date)} />
            </Box>
          </Box>
        )
      )}
    </Container>
  );
}