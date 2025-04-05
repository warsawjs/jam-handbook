export default function TipsAndTricksPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <h1 className="text-3xl font-bold">Tips & Tricks for Cursor IDE</h1>
      
      <div className="space-y-4">
        <p>
          Discover advanced techniques and hidden features to make the most of Cursor IDE.
          These tips will help you become more productive and efficient in your coding workflow.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Productivity Boosters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-medium">Multiple Cursors</h3>
              <p className="text-gray-600 mt-2">
                Edit multiple lines simultaneously by holding <code className="bg-gray-100 px-1 py-0.5 rounded">Alt</code> (Windows/Linux) or <code className="bg-gray-100 px-1 py-0.5 rounded">Option</code> (macOS) and clicking at different positions.
                Alternatively, select text and press <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+Shift+L</code> (Windows/Linux) or <code className="bg-gray-100 px-1 py-0.5 rounded">⌘+Shift+L</code> (macOS) to place a cursor at each line of the selection.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-medium">Smart Selection</h3>
              <p className="text-gray-600 mt-2">
                Use <code className="bg-gray-100 px-1 py-0.5 rounded">Shift+Alt+Right</code> (Windows/Linux) or <code className="bg-gray-100 px-1 py-0.5 rounded">Shift+Option+Right</code> (macOS) to smartly expand your selection based on syntax boundaries.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-medium">Command History</h3>
              <p className="text-gray-600 mt-2">
                In the AI chat, press the up arrow key to cycle through your previous AI requests, making it easy to refine or repeat earlier queries.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-medium">Split Editor</h3>
              <p className="text-gray-600 mt-2">
                Right-click on a tab and select "Split Right" or "Split Down" to view multiple files side by side, which is great when comparing code or referencing documentation while coding.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">AI Feature Optimization</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-medium">Be Specific in Requests</h3>
              <p className="text-gray-600 mt-2">
                Instead of asking "How do I sort an array?", specify "How do I sort an array of objects by the 'date' property in TypeScript?" The more specific your request, the more accurate the AI's response will be.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-medium">Provide Context</h3>
              <p className="text-gray-600 mt-2">
                When asking the AI to generate or modify code, select relevant surrounding code to give it context about variables, types, and coding style.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-medium">Use Your Own API Key</h3>
              <p className="text-gray-600 mt-2">
                For more consistent performance and potentially faster responses, consider adding your own OpenAI API key in Settings → AI → API Keys.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-medium">Chain Commands</h3>
              <p className="text-gray-600 mt-2">
                You can chain multiple instructions in a single AI request, like "Refactor this function to use async/await, add error handling, and add JSDoc comments."
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Hidden Gems</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-medium">Symbol Search</h3>
              <p className="text-gray-600 mt-2">
                Press <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+T</code> (Windows/Linux) or <code className="bg-gray-100 px-1 py-0.5 rounded">⌘+T</code> (macOS) to quickly jump to any symbol (function, class, variable) in your codebase.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-medium">Integrated Terminal Shortcuts</h3>
              <p className="text-gray-600 mt-2">
                Use <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+`</code> to toggle the terminal, and <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+Shift+`</code> to create a new terminal instance.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-medium">Code Folding</h3>
              <p className="text-gray-600 mt-2">
                Collapse code blocks with <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+Shift+[</code> (Windows/Linux) or <code className="bg-gray-100 px-1 py-0.5 rounded">⌘+Option+[</code> (macOS) and expand with <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+Shift+]</code> or <code className="bg-gray-100 px-1 py-0.5 rounded">⌘+Option+]</code>.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-medium">Zen Mode</h3>
              <p className="text-gray-600 mt-2">
                Press <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+K Z</code> (Windows/Linux) or <code className="bg-gray-100 px-1 py-0.5 rounded">⌘+K Z</code> (macOS) to enter Zen mode, which hides all UI elements and shows only your code for distraction-free coding.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Customization Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-medium">Custom Snippets</h3>
              <p className="text-gray-600 mt-2">
                Create custom code snippets for frequently used patterns. Go to File → Preferences → User Snippets to define your own snippets that can be triggered with a prefix.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-medium">Workspace-Specific Settings</h3>
              <p className="text-gray-600 mt-2">
                Create a <code className="bg-gray-100 px-1 py-0.5 rounded">.vscode/settings.json</code> file in your project root to define project-specific settings that override your global settings.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-medium">Custom Keybindings</h3>
              <p className="text-gray-600 mt-2">
                Customize your keyboard shortcuts by going to File → Preferences → Keyboard Shortcuts, or by editing the <code className="bg-gray-100 px-1 py-0.5 rounded">keybindings.json</code> file directly.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-medium">Themes and Icons</h3>
              <p className="text-gray-600 mt-2">
                Cursor supports VS Code themes and icon packs. Install them from the Extensions view to personalize your editor's appearance.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800">Pro Tip</h3>
        <p className="mt-2">
          Keep learning by exploring the command palette (<code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+Shift+P</code> or <code className="bg-gray-100 px-1 py-0.5 rounded">⌘+Shift+P</code>). It contains all available commands and is a great way to discover new features.
        </p>
      </div>
    </div>
  );
} 