import getBlog from "../../components/getBlog";
import getBlogList from "../../components/getBlogList";
import Layout from "../../components/Layout";

export default function Blog({
  blog_title,
  blog_content,
  blog_date,
  blog_author,
}) {
  return <Layout hideNavbar>{blog_title}</Layout>;
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
  };
}
