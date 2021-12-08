# MailBlog - Inbox powered blog

![mailblog](https://user-images.githubusercontent.com/17960677/145203419-09243272-0e8f-4974-8843-c21361133a00.png)

> MailBlog is a blog that is managed via your Email Inbox and allows you to create and manage your own blog posts by sending and email.

## Email Configuration

For GMail, [Allow Less Secure Apps](https://myaccount.google.com/lesssecureapps), If 2FA is turned on, use [App password](https://support.google.com/accounts/answer/185833)

Follow Similar steps for other E-Mail Providers.
## Environment Variables

put these values in `.env.local` file (in root directory of project) or set these values for the hosting provider,

```env
EMAIL=<EMAIL USED FOR BLOG>
PASSWORD=<EMAIL PASSWORD>
DB=postgres://username:password@HOSTNAME/DB_NAME
IMAP_HOST=imap.gmail.com
IMAP_PORT=993
```

## Blog Metadata

update [components/config.js](components/config.js) file to set metadata for your blog

## Installation

You can host this blog either as a static website, or a dynamic one, but first, initialize the database,

Use Commands from [DB.sql](DB.sql) to create a Database for your blog.

### Static Hosting

```sh
npm run dev
```

now go to `localhost:3000/api/refresh` to fetch emails and update your database, Now you can build,

```sh
npm run build
npm run export
```

Now deploy the `out` directory to your hosting provider.

The disadvantage is that it only updates blogs while building, thus, you need to repeat this process everytime you want to refresh.

### Dynamic hosting

You can host it as a dynamic website, for example, on [Vercel](https://vercel.com), to do so, simply run,

```sh
vercel --prod
```

Or if you want to host it on a VPS,

```sh
npm run build
npm run start
```

`revalidate` is set to 30 minutes (1800 seconds), you can change that, it's the duration after which list updates.

You can also trigger fetching emails by visiting `localhost:3000/api/refresh`, which will populate the database with new unread emails.

## Contributing

Thank you for your interest in contributing, If you feel like there's something missing or any new feature can be added, just create a PR and I will see the rest.

## Help

You can contact me on social media, Everything about me can be found [here](https://theabbie.github.io)

## Credits

* [chakra-templates.dev](https://chakra-templates.dev/) For Blog Templates

## Contact

Contact me anywhere, just visit [my portfolio](https://theabbie.github.io)

## License

This project is licensed under MIT License, See [LICENSE](/LICENSE) for more information
