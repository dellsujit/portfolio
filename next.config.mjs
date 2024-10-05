/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/', // Matches any path
          has: [
            {
              type: 'cookie',
              key: 'authToken', // Check if 'authToken' exists
              value: '', // Redirect if the token is missing or empty
            },
          ],
          destination: '/auth', // Redirect to login if not authenticated
          permanent: false, // Temporary redirect, good for authentication
        },
      ];
    },
  };

export default nextConfig;
