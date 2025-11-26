"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// 使用 React.ComponentProps 自动获取组件的类型，这样就不会报错了
export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}