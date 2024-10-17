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
    "***.mos.cms.futurecdn.net",
    "***.ign.com",
    "***.gamespot.com",
    "***.reedpopcdn.com",
    "assetsio.reedpopcdn.com",
    "***.pcgamer.com",
    "***.gamedeveloper.com",
    "***.gamedeveloper.com",
    "hardcoregamer.com",
    "backloggamersphotos.blob.core.windows.net"
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
