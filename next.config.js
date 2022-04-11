/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.pravatar.cc"],
  },
  env: {
    DEVELOPMENT_URL: "http://localhost:3100/api/api-service",
    PRODUCTION_URL: "https://your-url/api/api-service",
    MONGODB_URI:
      "mongodb+srv://Xand3rx:digits232@cluster0.anhcv.mongodb.net/blogPosts?retryWrites=true&w=majority",
    MONGODB_DB_NAME: "blogPosts",
    COLLECTION_NAME: "posts",
  },
  // env: {
  // DEVELOPMENT_URL: "http://localhost:3100/api-service",
  // PRODUCTION_URL: "https://your-url/api-service",
  //   MONGODB_URI:
  //     "mongodb+srv://<username>:<password>@cluster0.anhcv.mongodb.net/<collection_name>?retryWrites=true&w=majority",
  // MONGODB_DB_NAME: "database_name",
  // COLLECTION_NAME: "collection_name",
  // },
};

module.exports = nextConfig;
