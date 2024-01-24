/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['i.scdn.co', 'mosaic.scdn.co','seeded-session-images.scdn.co','seed-mix-image.spotifycdn.com']
	}
}

module.exports = nextConfig
