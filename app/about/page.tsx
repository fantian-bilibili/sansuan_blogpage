import Link from "next/link";
import { siteConfig } from "@/site.config";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-200 transition-colors duration-300">
      <nav className="fixed w-full top-0 z-50 bg-white/70 dark:bg-gray-950/70 backdrop-blur-md border-b border-gray-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl hover:text-blue-500 transition">
                <span className="text-blue-500 mr-1">&gt;_</span>{siteConfig.title}
            </Link>
            <div className="flex gap-4">
               <ThemeToggle />
               <Link href="/" className="text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition py-2">Close</Link>
            </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 max-w-4xl mx-auto px-6">
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800">
            {/* 头部信息 */}
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start border-b border-gray-100 dark:border-gray-800 pb-10 mb-10">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                        <span className="text-4xl">👨‍💻</span>
                    </div>
                </div>
                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{siteConfig.author}</h1>
                    <p className="text-blue-600 dark:text-blue-400 font-mono text-sm mb-4">Student Developer</p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                        目前就读于NPUW_EE的学生开发者，热衷于深度学习、机器视觉、ROS等领域。
                        因为生活有点牛马，所以只好随机更新了。
                        anyway, 欢迎你能来看我blog！
                    </p>
                    
                    <div className="flex justify-center md:justify-start gap-4 mt-6">
                         <a href={siteConfig.social.github} target="_blank" className="text-gray-400 hover:text-black dark:hover:text-white transition text-2xl"><i className="fab fa-github"></i></a>
                         <a href={siteConfig.social.gitee} target="_blank" className="text-gray-400 hover:text-red-600 transition text-2xl"><i className="fab fa-git-alt"></i></a>
                         <a href={siteConfig.social.email} className="text-gray-400 hover:text-blue-500 transition text-2xl"><i className="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>

            {/* 技能栈 */}
            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <i className="fas fa-code text-blue-500"></i> 技术栈
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {['cxx', 'python','deep learning','machine vision','ROS','Git'].map(skill => (
                            <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium border border-gray-200 dark:border-gray-700">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <i className="fas fa-briefcase text-purple-500"></i> 经历
                    </h3>
                    <ul className="space-y-4">
                        <li className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                            <div className="text-sm text-gray-400 mb-1">2023 - Present</div>
                            <div className="font-bold text-gray-800 dark:text-gray-200">独立开发者</div>
                            <div className="text-sm text-gray-500">专注于构建 Web 应用与开源工具</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}