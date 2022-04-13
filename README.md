# NextJs Blog Application

A simple blog application built with NextJs.

## Getting Started

1. I have used a custom port, so run with `npm run dev -- -p 3100`.
   You can change to a port number of your choice by changing `"dev:" npm run dev [your_port_number]` the in the `package.json` file.

2. Open [http://localhost:3100](http://localhost:3100) with your browser to see the result.

3. You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

4. To add environment variables to the JavaScript bundle, create an `env.local` file and add the `env` config:

```
  APP_NAME="NextJS: Xand3rx Blog"
  DEVELOPMENT_URL="http://localhost:3100/api/api-service"
  PRODUCTION_URL="https://your-url/api/api-service"
  MONGODB_URI='my_value'
  MONGODB_DB_NAME='database_name'
  COLLECTION_NAME='collection_name'
```

Now you can access `process.env.MONGODB_URI` or any name you prefer in the code base. For example:

5. Optionally you can change connection parameters in `/lib/mongodb.js` and `/pages/api/api-service.js` respectively.

7. [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3100/api/hello](http://localhost:3100/api/hello). This endpoint can be edited in `pages/api/hello.js`.

8. The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## Project Screenshots

![Index Page](/public/img/landing.png)