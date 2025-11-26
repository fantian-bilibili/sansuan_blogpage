import Link from "next/link";
import { siteConfig } from "@/site.config";
import { getSortedPostsData } from "@/lib/posts";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Background } from "@/components/Background"; // 引入我们刚做的背景组件

export default function Home() {
  // 获取最新的 3 篇文章
  const posts = getSortedPostsData().slice(0, 3);

  return (
    <main className="min-h-screen relative overflow-hidden text-gray-900 dark:text-gray-200 transition-colors duration-300">
      
      {/* 1. 统一背景组件 (白天隐藏光球，黑夜显示) */}
      <Background />

      {/* 2. 导航栏 */}
      <header className="fixed w-full top-0 z-50 glass-nav transition-all duration-300">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex items-center cursor-pointer hover:opacity-80 transition">
              <span className="font-mono text-blue-600 dark:text-blue-500 text-xl font-bold mr-1">&gt;_</span>
              <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">{siteConfig.title}</span>
            </div>
            
            {/* 中间菜单 */}
            <nav className="hidden md:flex space-x-8">
              {siteConfig.nav.map((item) => (
                 <Link key={item.href} href={item.href} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors text-sm font-medium">
                    {item.name}
                 </Link>
              ))}
            </nav>

            {/* 右侧功能区 */}
            <div className="flex items-center space-x-4">
              <ThemeToggle /> {/* 切换按钮 */}
              
              <div className="hidden md:flex items-center space-x-4 pl-4 border-l border-gray-200 dark:border-gray-700">
                <a href={siteConfig.social.github} target="_blank" title="GitHub" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition">
                  <i className="fab fa-github text-lg"></i>
                </a>
                <a href={siteConfig.social.gitee} target="_blank" title="Gitee" className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500 transition flex items-center gap-1">
                  <i className="fab fa-git-alt text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Hero 区域 (主视觉) - 这就是你主页“消失”的部分 */}
      <section className="relative pt-40 pb-20 max-w-5xl mx-auto px-6 text-center">
         <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium mb-6 animate-fade-in">
             <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
             Available for hire
         </div>
         <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-6 animate-fade-in">
             把想法转化为<br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">优雅的代码</span>
         </h1>
         <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in">
             你好，我是 <strong>{siteConfig.author}</strong>。
             在这里记录我的技术思考与学习历程。
         </p>
         <div className="flex justify-center gap-4 animate-fade-in">
             <Link href="/blog" className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-lg shadow-blue-500/20">
                 开始阅读
             </Link>
             <a href={siteConfig.social.github} target="_blank" className="px-8 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white font-semibold border border-gray-200 dark:border-gray-700 transition flex items-center gap-2">
                 <i className="fab fa-github"></i> GitHub
             </a>
         </div>
      </section>

      {/* 4. 最新文章列表 (只显示前3篇) */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30 border-t border-gray-200 dark:border-gray-800/50">
        <div className="max-w-5xl mx-auto px-6">
            <div className="flex justify-between items-end mb-10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">最新文章</h2>
                <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:text-blue-500 text-sm font-medium transition flex items-center gap-1">
                    查看全部 <i className="fas fa-arrow-right text-xs"></i>
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {posts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`} className="group">
                        <article className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition hover:-translate-y-1 hover:shadow-lg flex flex-col">
                            {/* 封面图 */}
                            <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center group-hover:from-blue-50 group-hover:to-purple-50 dark:group-hover:from-blue-900/20 dark:group-hover:to-purple-900/20 transition">
                                <i className="fas fa-file-code text-4xl text-gray-400 dark:text-gray-700 group-hover:text-blue-500 transition"></i>
                            </div>
                            {/* 内容 */}
                            <div className="p-5 flex flex-col flex-1">
                                <div className="text-xs text-blue-600 dark:text-blue-500 font-mono mb-2">{post.date}</div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition line-clamp-1">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 flex-1">
                                    {post.description}
                                </p>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
            
            {posts.length === 0 && (
                <p className="text-center text-gray-500 py-10">暂无文章，请在 posts 文件夹添加 .md 文件。</p>
            )}
        </div>
      </section>
      
      <footer className="py-8 text-center text-gray-500 dark:text-gray-600 text-sm bg-gray-50 dark:bg-gray-950">
        © 2024 {siteConfig.author}. Built with Next.js & Tailwind.
      </footer>
    </main>
  );
}