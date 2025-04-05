export default function GettingStartedGuide() {
  return (
    <div className="space-y-8 max-w-4xl">
      <h1 className="text-3xl font-bold">Getting Started with Cursor IDE</h1>
      
      <div className="space-y-4">
        <p>
          Cursor is an AI-first code editor that enhances your coding experience with powerful AI features 
          while maintaining compatibility with VS Code. This guide will help you get started with Cursor IDE.
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Installation</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <p><strong>Download Cursor:</strong> Visit <a href="https://cursor.sh" className="text-blue-600 hover:underline">https://cursor.sh</a> and download the appropriate version for your operating system (Windows, macOS, or Linux).</p>
            </li>
            <li>
              <p><strong>Install the application:</strong> Follow the standard installation process for your operating system.</p>
              <ul className="list-disc pl-6 mt-2">
                <li><strong>macOS</strong>: Open the downloaded .dmg file and drag Cursor to your Applications folder.</li>
                <li><strong>Windows</strong>: Run the installer and follow the prompts.</li>
                <li><strong>Linux</strong>: Follow the installation instructions for your distribution.</li>
              </ul>
            </li>
            <li>
              <p><strong>Launch Cursor:</strong> Open the application from your applications menu or dock.</p>
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Initial Setup</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <p><strong>Sign In (Optional):</strong> You can sign in with your GitHub account or create a Cursor account to sync your settings across devices.</p>
            </li>
            <li>
              <p><strong>Connect to AI (Optional):</strong> For AI features, you can either use Cursor's provided AI or connect your own OpenAI API key for enhanced capabilities.</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Go to Settings (Gear icon) → AI → API Keys</li>
                <li>Enter your OpenAI API key if you have one</li>
              </ul>
            </li>
            <li>
              <p><strong>Install Extensions:</strong> Cursor is compatible with VS Code extensions. Access the Extensions view by clicking the Extensions icon in the Activity Bar or pressing <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+Shift+X</code> (Windows/Linux) or <code className="bg-gray-100 px-1 py-0.5 rounded">⌘+Shift+X</code> (macOS).</p>
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Basic Usage</h2>
          <div className="space-y-4">
            <p>Cursor works similarly to VS Code, with some additional AI-powered features:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Open a project:</strong> Use File → Open Folder to open your existing project.</li>
              <li><strong>Command Palette:</strong> Access all commands using <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+Shift+P</code> (Windows/Linux) or <code className="bg-gray-100 px-1 py-0.5 rounded">⌘+Shift+P</code> (macOS).</li>
              <li><strong>AI Chat:</strong> Open the AI chat panel with <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+K</code> (Windows/Linux) or <code className="bg-gray-100 px-1 py-0.5 rounded">⌘+K</code> (macOS) to ask questions about your code.</li>
              <li><strong>Terminal:</strong> Open the integrated terminal with <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+`</code> (Windows/Linux) or <code className="bg-gray-100 px-1 py-0.5 rounded">⌘+`</code> (macOS).</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Your First AI Interaction</h2>
          <div className="space-y-4">
            <p>Try using Cursor's AI features with these simple steps:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Open a code file in your project.</li>
              <li>Place your cursor where you want to add code.</li>
              <li>Press <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+K</code> (Windows/Linux) or <code className="bg-gray-100 px-1 py-0.5 rounded">⌘+K</code> (macOS) to open the AI chat.</li>
              <li>Type a natural language request like "Create a function that calculates the factorial of a number".</li>
              <li>The AI will suggest code that you can accept, modify, or reject.</li>
            </ol>
          </div>
        </section>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800">Next Steps</h3>
        <p className="mt-2">
          Now that you've got Cursor set up, check out the <a href="/guides/keyboard-shortcuts" className="text-blue-600 hover:underline">Keyboard Shortcuts</a> guide to become more efficient, 
          or dive into the <a href="/guides/ai-features" className="text-blue-600 hover:underline">AI Features</a> guide to learn about Cursor's unique capabilities.
        </p>
      </div>
    </div>
  );
} 