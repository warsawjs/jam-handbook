export default function AIFeaturesGuide() {
  return (
    <div className="space-y-8 max-w-4xl">
      <h1 className="text-3xl font-bold">AI Features in Cursor IDE</h1>
      
      <div className="space-y-4">
        <p>
          Cursor IDE distinguishes itself from other code editors with its powerful AI capabilities.
          This guide explores the key AI features that can significantly enhance your coding workflow.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">AI Chat</h2>
          <div className="space-y-4">
            <p>
              The AI Chat feature allows you to have a conversation with an AI assistant about your code.
              You can ask questions, request explanations, or get help with specific coding challenges.
            </p>
            <h3 className="text-xl font-medium">How to use:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Press <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+K</code> (Windows/Linux) or <code className="bg-gray-100 px-1 py-0.5 rounded">⌘+K</code> (macOS) to open the AI Chat panel.</li>
              <li>Type your question or request in natural language.</li>
              <li>The AI will respond with relevant information, code suggestions, or explanations.</li>
            </ol>
            <h3 className="text-xl font-medium">Example use cases:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>"How do I implement a binary search in JavaScript?"</li>
              <li>"What's wrong with my React useEffect hook?"</li>
              <li>"Explain how this algorithm works."</li>
              <li>"Help me debug this function."</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Code Generation</h2>
          <div className="space-y-4">
            <p>
              Cursor can generate code based on your descriptions or complete partially written code.
              This feature is especially useful for boilerplate code, common patterns, or when you know what you need but aren't sure about the exact syntax.
            </p>
            <h3 className="text-xl font-medium">How to use:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Place your cursor where you want the code to be generated.</li>
              <li>Press <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+L</code> (Windows/Linux) or <code className="bg-gray-100 px-1 py-0.5 rounded">⌘+L</code> (macOS).</li>
              <li>Describe what you want the code to do in natural language.</li>
              <li>The AI will generate code based on your description and insert it at the cursor position.</li>
            </ol>
            <h3 className="text-xl font-medium">Example use cases:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>"Create a React component that displays a user profile with name, avatar, and bio"</li>
              <li>"Write a function that calculates the Fibonacci sequence"</li>
              <li>"Generate a TypeScript interface for a user object with name, email, and address fields"</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Code Explanation</h2>
          <div className="space-y-4">
            <p>
              When you encounter complex or unfamiliar code, Cursor can explain what it does in plain English.
              This feature helps you understand code faster, whether it's someone else's code or code you wrote a while ago.
            </p>
            <h3 className="text-xl font-medium">How to use:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Select the code you want to understand.</li>
              <li>Press <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+Shift+E</code> (Windows/Linux) or <code className="bg-gray-100 px-1 py-0.5 rounded">⌘+Shift+E</code> (macOS).</li>
              <li>The AI will provide an explanation of the selected code in the chat panel.</li>
            </ol>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Code Refactoring</h2>
          <div className="space-y-4">
            <p>
              Cursor can help you improve your code by suggesting refactorings to make it more efficient, readable, or maintainable.
            </p>
            <h3 className="text-xl font-medium">How to use:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Select the code you want to refactor.</li>
              <li>Press <code className="bg-gray-100 px-1 py-0.5 rounded">Alt+K</code> (Windows/Linux) or <code className="bg-gray-100 px-1 py-0.5 rounded">Option+K</code> (macOS).</li>
              <li>Specify how you want to refactor the code (e.g., "Make this more efficient" or "Convert to async/await").</li>
              <li>The AI will suggest changes to improve your code.</li>
            </ol>
            <h3 className="text-xl font-medium">Example use cases:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>"Refactor this to use modern JavaScript features"</li>
              <li>"Make this code more maintainable"</li>
              <li>"Optimize this function for performance"</li>
              <li>"Convert this class component to a functional component with hooks"</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Code Documentation</h2>
          <div className="space-y-4">
            <p>
              Cursor can automatically generate documentation for your code, including function descriptions, parameter explanations, and return value details.
            </p>
            <h3 className="text-xl font-medium">How to use:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Select the code you want to document.</li>
              <li>Open the AI Chat with <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+K</code> (Windows/Linux) or <code className="bg-gray-100 px-1 py-0.5 rounded">⌘+K</code> (macOS).</li>
              <li>Ask "Add documentation to this code" or "Generate JSDoc for this function".</li>
              <li>The AI will generate appropriate documentation that you can insert into your code.</li>
            </ol>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Test Generation</h2>
          <div className="space-y-4">
            <p>
              Cursor can help you create unit tests for your code, saving you time and ensuring better code coverage.
            </p>
            <h3 className="text-xl font-medium">How to use:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Select the code you want to test or position your cursor where you want to insert tests.</li>
              <li>Open the AI Chat with <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl+K</code> (Windows/Linux) or <code className="bg-gray-100 px-1 py-0.5 rounded">⌘+K</code> (macOS).</li>
              <li>Ask "Generate tests for this function" or be more specific like "Create Jest tests for this React component".</li>
              <li>The AI will generate appropriate test cases based on your code's functionality.</li>
            </ol>
          </div>
        </section>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800">Pro Tip</h3>
        <p className="mt-2">
          For the best results with Cursor's AI features, try to be as specific as possible in your requests. The more context and detail you provide, the more accurate and useful the AI's responses will be.
        </p>
      </div>
    </div>
  );
} 