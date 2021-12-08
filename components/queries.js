const queries = {
    addAuthor: "INSERT INTO AUTHOR (author_id, author_name) VALUES ($1, $2) ON CONFLICT DO NOTHING",
    addBlog: "INSERT INTO BLOG (blog_title, blog_content, blog_description, blog_date, blog_author, is_newsletter) VALUES ($1, $2, $3, $4, $5, false)",
    getBlogList: "SELECT blog_id, blog_title, LEFT(blog_description, 300) AS blog_description, to_char(blog_date, 'YYYY-MM-DD') AS blog_date, blog_author FROM blog ORDER BY blog_date DESC",
    getBlog: "SELECT blog_title, blog_content, blog_description, to_char(blog_date, 'YYYY-MM-DD') AS blog_date, blog_author FROM blog WHERE blog_id = $1",
    addSubscriber: "INSERT INTO SUBSCRIBERS (subscriber_email) VALUES ($1) ON CONFLICT DO NOTHING",
}

module.exports = queries;