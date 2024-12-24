"use client";
import type { ReactNode } from "react";

export type NewsContentProps = {
  children?: ReactNode;
};

export default function NewsContent({ children }: NewsContentProps) {
  return (
    <div className="mb-6 flex w-full flex-col items-center">
      <div className="prose-news-content prose max-w-[80%]">{children}</div>
    </div>
  );
}
