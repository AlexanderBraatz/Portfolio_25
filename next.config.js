/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'pyoalxsojnjucwmeddcz.supabase.co',
				port: ''
			}
		]
	},
	experimental: {
		serverActions: true // Enable serverActions here
	}
};

module.exports = nextConfig;
