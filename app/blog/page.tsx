import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import { siteConfig } from "@/site.config";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Background } from "@/components/Background";

export default function BlogIndex() {
  const allPosts = getSortedPostsData();

  return (
    <main className="min-h-screen text-gray-900 dark:text-gray-200 transition-colors duration-300">
      {/* 统一背景组件：白天隐藏光球，黑夜显示光球 */}
      <Background />

      {/* 导航栏：Glassmorphism 效果，适配双模式 */}
      <nav className="fixed w-full top-0 z-50 glass-nav transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* 左侧 Logo */}
            <Link href="/" className="font-bold text-xl tracking-tight hover:text-blue-500 transition flex items-center">
                <span className="text-blue-600 dark:text-blue-500 mr-1">&gt;_</span>
                <span className="text-gray-900 dark:text-white">{siteConfig.title}</span>
            </Link>
            
            {/* 右侧功能区 */}
            <div className="flex items-center gap-4">
               <ThemeToggle /> {/* 切换白天/黑夜 */}
               <Link href="/" className="text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition">返回首页</Link>
            </div>
        </div>
      </nav>

      {/* 文章列表主区域 */}
      <section className="pt-32 pb-20 max-w-5xl mx-auto px-6">
        <div className="mb-12 text-center animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">所有文章</h1>
            <p className="text-gray-500 dark:text-gray-400">共 {allPosts.length} 篇思考与笔记</p>
        </div>

        <div className="grid gap-6">
          {allPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group block p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl hover:shadow-lg hover:border-blue-500/30 transition duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">{post.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">{post.description}</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-gray-500 whitespace-nowrap">
                    {/* 分类标签：白天浅蓝底，黑夜深蓝底 */}
                    <span className="bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2 py-1 rounded border border-blue-200 dark:border-blue-500/20">{post.category}</span>
                    <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}

          {/* 空状态提示 */}
          {allPosts.length === 0 && (
             <div className="text-center py-20 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-dashed border-gray-200 dark:border-gray-800">
                <p className="text-gray-500 dark:text-gray-400">暂无文章，请在 posts 文件夹添加 .md 文件。</p>
             </div>
          )}
        </div>
      </section>
    </main>
  );
}