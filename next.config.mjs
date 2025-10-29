/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    "/src/app/api//*": ["./node_modules/.prisma/client//"],
    "/": ["./node_modules/.prisma/client/**/*"],
    "/src/generated": ["./src/generated/**/*"],
  },
};

export default nextConfig;
