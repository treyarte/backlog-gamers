/** @type {import('next').NextConfig} */

const hosts = [
    "***.gematsu.com",
    "mmos.com",
    "***.destructoid.com",
    "***.siliconera.com",
    "***.nintendolife.com",
    "***.ignimgs.com",
    "***.contentstack.com",
    "***.gnwcdn.com",
    "***.hardcoregamerimages.com",
    "***.kinja-img.com",
    "***.gamespot.com",
    "***.dualshockersimages.com",
]

const nextConfig = {
    images: {
        remotePatterns: [
            ...hosts.map((hostname) => (
                {
                    protocol: 'https',
                    hostname
                }
            ))
        ]
    }
}

module.exports = nextConfig
