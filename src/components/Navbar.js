"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (href) => {
    const isActive = pathname === href || pathname.startsWith(href + "/");
    return `hover:text-blue-500 ${
      isActive ? "text-blue-600 font-bold underline" : "text-gray-700"
    }`;
  };

  return (
    <nav className="p-4 bg-white shadow-md flex gap-4">
      <Link href="/" className={linkClass("/")}>
        Home
      </Link>
      <Link href="/blog" className={linkClass("/blog")}>
        Blog
      </Link>
      <Link href="/about" className={linkClass("/about")}>
        About
      </Link>
    </nav>
  );
}
