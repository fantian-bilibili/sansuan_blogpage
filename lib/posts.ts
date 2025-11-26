// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 文章存放目录
const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  content: string;
}

// 获取所有文章列表（用于首页展示）
export function getSortedPostsData(): PostData[] {
  // 如果目录不存在，先创建（防止报错）
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory);
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { title: string; date: string; description: string; category: string }),
      content: matterResult.content,
    };
  });

  // 按日期排序：最新的在前面
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 获取单篇文章内容
export function getPostData(id: string): PostData {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    id,
    ...(matterResult.data as { title: string; date: string; description: string; category: string }),
    content: matterResult.content,
  };
}