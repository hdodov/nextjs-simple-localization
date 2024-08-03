/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // https://stackoverflow.com/a/72833238/3130281
  },
};

export default nextConfig;
