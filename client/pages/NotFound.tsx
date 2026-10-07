import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page not found | Hemanth Palakaluri";
    const robots = document.querySelector<HTMLMetaElement>(
      'meta[name="robots"]',
    );
    const previousContent = robots?.content;
    const tag =
      robots ?? document.head.appendChild(document.createElement("meta"));
    tag.name = "robots";
    tag.content = "noindex, nofollow";

    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
    return () => {
      document.title = "Hemanth Palakaluri | Senior Technical Lead";
      if (robots && previousContent) robots.content = previousContent;
      else tag.remove();
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
