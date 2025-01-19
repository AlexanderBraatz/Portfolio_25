/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'jcpportraits.com'
			}
		]
	},
	experimental: {
		serverActions: true // Enable serverActions here
	}
};

module.exports = nextConfig;
