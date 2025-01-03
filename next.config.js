/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'jcpportraits.com'
			}
		]
	}
};

module.exports = nextConfig;
