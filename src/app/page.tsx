import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Welcome to the Cursor IDE Handbook</h1>
        <p className="text-xl text-gray-600">
          Your comprehensive guide to mastering Cursor IDE - the AI-powered code editor
          that combines the best of VS Code with cutting-edge AI features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Link href="/guides/getting-started" className="border rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
          <p className="text-gray-600">
            Learn how to install, set up, and use Cursor IDE's basic features.
          </p>
        </Link>
        
        <Link href="/guides/keyboard-shortcuts" className="border rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Keyboard Shortcuts</h2>
          <p className="text-gray-600">
            Boost your productivity with essential keyboard shortcuts.
          </p>
        </Link>
        
        <Link href="/guides/ai-features" className="border rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">AI Features</h2>
          <p className="text-gray-600">
            Discover how to use Cursor's AI capabilities for code generation, refactoring, and more.
          </p>
        </Link>
        
        <Link href="/tips" className="border rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Tips & Tricks</h2>
          <p className="text-gray-600">
            Advanced techniques and hidden features to level up your coding experience.
          </p>
        </Link>
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Why Cursor IDE?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-medium">AI-Powered</h3>
            <p className="text-gray-600">Built-in language models that understand your code and help you write better code faster.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">VS Code Compatible</h3>
            <p className="text-gray-600">Familiar interface with support for VS Code extensions and settings.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Speed & Performance</h3>
            <p className="text-gray-600">Optimized for speed with intelligent code navigation and completion.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
