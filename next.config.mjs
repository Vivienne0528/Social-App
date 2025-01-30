// /** @type {import('next').NextConfig} */
// const nextConfig = {
    
// };

// export default nextConfig;
import path from 'path';

export default {
  webpack(config) {
    const __dirname = path.dirname(new URL(import.meta.url).pathname); // 替代 __dirname

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),  // 设置 '@' 为 'src' 目录的别名
    };
    return config;
  },
};


