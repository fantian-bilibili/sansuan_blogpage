import { getPostData, getSortedPostsData } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Background } from "@/components/Background";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postData = getPostData(id);

  return (
    <article className="min-h-screen text-gray-900 dark:text-gray-200 transition-colors duration-300">
      <Background />

      {/* 导航栏 */}
      <nav className="fixed top-0 w-full z-50 glass-nav transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
           <Link href="/blog" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition">← 返回列表</Link>
           <ThemeToggle />
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-10 text-center">
            <div className="text-blue-600 dark:text-blue-500 text-sm font-mono mb-4">{postData.date} • {postData.category}</div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">{postData.title}</h1>
        </header>
        
        {/* 核心修改：
            prose: 默认样式（适合白天）
            dark:prose-invert: 反色样式（适合黑夜）
        */}
        <div className="prose prose-lg max-w-none dark:prose-invert 
            prose-headings:text-gray-900 dark:prose-headings:text-white
            prose-a:text-blue-600 dark:prose-a:text-blue-400
            prose-strong:text-gray-900 dark:prose-strong:text-white
            prose-code:text-purple-600 dark:prose-code:text-purple-400
            prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900">
            <ReactMarkdown>{postData.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}