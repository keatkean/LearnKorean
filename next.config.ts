import type { NextConfig } from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = '';
if (isGithubActions) {
  repo = process.env.GITHUB_REPOSITORY?.replace(/^.*?\//, '') || '';
}

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGithubActions && repo ? `/${repo}` : '',
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
