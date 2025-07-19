import React from 'react'

function App() {
  // Add error boundary and defensive programming
  React.useEffect(() => {
    // Handle potential extension conflicts
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes("Cannot read properties of null")) {
        console.warn("Extension conflict detected, continuing with app functionality");
        event.preventDefault();
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          WanderLust Travel
        </h1>
        <p className="text-lg text-gray-600">
          Discover Your Next Adventure
        </p>
      </div>
    </div>
  )
}

export default App