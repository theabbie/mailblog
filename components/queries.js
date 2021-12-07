const queries = {
    addAuthor: "INSERT INTO AUTHOR (author_id, author_name) VALUES ($1, $2) ON CONFLICT DO NOTHING",
    addBlog: "INSERT INTO blog (blog_title, blog_content, blog_date, blog_author) VALUES ($1, $2, $3, $4)",
}

module.exports = queries;