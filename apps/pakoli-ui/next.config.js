module.exports = {
  reactStrictMode: true,
  transpilePackages: ['pakolicons'],
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [{ hostname: 'tailwindui.com' }],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
