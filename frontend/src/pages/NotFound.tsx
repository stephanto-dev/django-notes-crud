function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-4xl font-semibold text-gray-600 mt-4">Page Not Found</h2>
        <p className="text-gray-500 mt-4 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;