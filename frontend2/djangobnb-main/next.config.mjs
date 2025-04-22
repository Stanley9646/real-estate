/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '/**'
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8001',
                pathname: '/media/**',
              },
        ]
    }
};

export default nextConfig;
