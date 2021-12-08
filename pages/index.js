import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import BlogList from "../components/BlogList";
import getBlogList from "../components/getBlogList";

import Head from "next/head";
import config from "../components/config";

export default function Home({ blogs }) {
  return (
    <Layout>
      <Head>
        <title>{config.name}</title>
        <meta description={config.description} />
        <link rel="icon" href={config.logo} />
      </Head>
      <Newsletter />
      <BlogList blogs={blogs} />
    </Layout>
  );
}

export async function getStaticProps() {
  let blogs = await getBlogList();

  return {
    props: {
      blogs,
    },
  };
}
