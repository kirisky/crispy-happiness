/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 导出静态页面
  //  trailingSlash: false, // 不使用尾部斜杠，页面输出为 about.html 格式
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
