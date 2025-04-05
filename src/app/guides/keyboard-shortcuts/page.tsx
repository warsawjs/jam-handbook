export default function KeyboardShortcutsGuide() {
  return (
    <div className="space-y-8 max-w-4xl">
      <h1 className="text-3xl font-bold">Keyboard Shortcuts in Cursor IDE</h1>
      
      <div className="space-y-4">
        <p>
          Master these keyboard shortcuts to significantly boost your productivity in Cursor IDE.
          Since Cursor is built on top of VS Code, it inherits most of its shortcuts while adding some
          unique AI-related shortcuts.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">AI-Specific Shortcuts</h2>
          <p>These shortcuts are unique to Cursor and help you interact with its AI features:</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Windows/Linux</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">macOS</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Open AI Chat</td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+K</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">⌘+K</code></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Generate code with AI</td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+L</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">⌘+L</code></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Explain selected code</td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+Shift+E</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">⌘+Shift+E</code></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Edit selected code with AI</td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Alt+K</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Option+K</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Basic Editing</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Windows/Linux</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">macOS</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Cut line</td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+X</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">⌘+X</code></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Copy line</td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+C</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">⌘+C</code></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Move line up/down</td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Alt+↑/↓</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Option+↑/↓</code></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Copy line up/down</td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Shift+Alt+↑/↓</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Shift+Option+↑/↓</code></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Delete line</td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+Shift+K</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">⌘+Shift+K</code></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Insert line below/above</td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+Enter / Ctrl+Shift+Enter</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">⌘+Enter / ⌘+Shift+Enter</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Navigation</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Windows/Linux</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">macOS</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Go to file</td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+P</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">⌘+P</code></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Go to symbol</td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+Shift+O</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">⌘+Shift+O</code></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Go to line</td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+G</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">⌘+G</code></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Open command palette</td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+Shift+P</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">⌘+Shift+P</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Search and Replace</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Windows/Linux</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">macOS</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Find</td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+F</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">⌘+F</code></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Replace</td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+H</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">⌘+H</code></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Find in files</td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+Shift+F</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">⌘+Shift+F</code></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Replace in files</td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+Shift+H</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code className="bg-gray-100 px-1 py-0.5 rounded">⌘+Shift+H</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800">Pro Tip</h3>
        <p className="mt-2">
          You can view and customize all keyboard shortcuts in Cursor by pressing <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+K Ctrl+S</code> (Windows/Linux) or <code className="bg-gray-100 px-1 py-0.5 rounded">⌘+K ⌘+S</code> (macOS).
        </p>
      </div>
    </div>
  );
} 