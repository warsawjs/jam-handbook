"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Getting Started", path: "/guides/getting-started" },
  { name: "Keyboard Shortcuts", path: "/guides/keyboard-shortcuts" },
  { name: "AI Features", path: "/guides/ai-features" },
  { name: "Tips & Tricks", path: "/tips" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 p-4 border-r h-full">
      <div className="text-xl font-bold mb-4">Cursor Handbook</div>
      <div className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            href={item.path}
            className={cn(
              "px-3 py-2 rounded-md hover:bg-gray-100 transition-colors",
              pathname === item.path ? "bg-gray-100 font-medium" : ""
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
} 