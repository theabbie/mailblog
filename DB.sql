CREATE TABLE AUTHOR (
    author_id TEXT PRIMARY KEY,
    author_name TEXT NOT NULL
);

CREATE TABLE TAGS (
    tag_id SERIAL PRIMARY KEY,
    tag_name TEXT NOT NULL
);

CREATE TABLE BLOG (
    blog_id SERIAL PRIMARY KEY,
    blog_title TEXT NOT NULL,
    blog_description TEXT NOT NULL,
    blog_content TEXT NOT NULL,
    blog_date DATE NOT NULL,
    blog_author TEXT NOT NULL,
    is_newsletter BOOLEAN NOT NULL,
    FOREIGN KEY (blog_author) REFERENCES AUTHOR (author_id)
);

CREATE TABLE BLOG_TAGS (
    blog_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    FOREIGN KEY (blog_id) REFERENCES BLOG (blog_id),
    FOREIGN KEY (tag_id) REFERENCES TAGS (tag_id)
);

CREATE TABLE SUBSCRIBERS (
    subscriber_id SERIAL PRIMARY KEY,
    subscriber_email TEXT NOT NULL
);