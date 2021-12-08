import {
  Container,
  Heading,
  Stack,
  Box,
  Flex,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";

import getBlog from "../../components/getBlog";
import getBlogList from "../../components/getBlogList";
import Layout from "../../components/Layout";
import AuthorCard from "../../components/AuthorCard";
import config from "../../components/config";

export default function Blog({
  blog_title,
  blog_content,
  blog_description,
  blog_date,
  blog_author,
}) {
  return (
    <Layout hideNavbar>
      <Head>
        <title>{blog_title}</title>
        <meta name="description" content={blog_description} />
        <meta property="og:title" content={blog_title} />
        <meta property="og:description" content={blog_description} />
      </Head>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        pt={{ base: 10, md: 28 }}
        pb={{ base: 10, md: 20 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          {blog_title}
        </Heading>
      </Stack>
      <Flex
        maxW={"5xl"}
        margin="auto"
        color={useColorModeValue("#242424", "white")}
        align="flex-start"
        justifyContent="flex-start"
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Flex flexGrow={1} dangerouslySetInnerHTML={{ __html: blog_content }} />
        <AuthorCard />
      </Flex>
    </Layout>
  );
}

export async function getStaticPaths() {
  const blogs = await getBlogList();

  return {
    paths: blogs.map((blog) => ({ params: { id: blog.blog_id.toString() } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = await getBlog({ blog_id: params.id });

  if (blog.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...blog[0],
    },
    revalidate: config.revalidate,
  };
}
