export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none transition-opacity duration-500 opacity-0 dark:opacity-100">
      {/* 注意上面的 opacity-0 dark:opacity-100：白天隐藏，黑夜显示 */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" style={{ animationDelay: '4s' }}></div>
    </div>
  );
}