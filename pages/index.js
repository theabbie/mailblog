import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import BlogList from "../components/BlogList";
import getBlogList from "../components/getBlogList";

export default function Home({ blogs }) {
  return (
    <Layout>
      <Newsletter />
      <BlogList blogs={blogs} />
    </Layout>
  );
}

export async function getStaticProps() {
  let blogs = await getBlogList();

  return {
    props: {
      blogs
    },
  };
}