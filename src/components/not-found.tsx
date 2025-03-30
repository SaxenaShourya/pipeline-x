import { Link } from "react-router";
import { IconHome } from "@tabler/icons-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-6 m-4 rounded-md bg-muted">
      <h1 className="text-6xl font-bold text-neutral-800">404</h1>
      <p className="text-xl text-gray-700 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved. Don’t
        worry, we’ll guide you back!
      </p>

      {/* Go Home Button with Icon */}
      <Link
        to="/"
        className="flex items-center gap-2 px-6 py-2 text-white bg-primary rounded-lg hover:bg-primary/90 transition"
      >
        <IconHome size={20} />
        <span>Go Home</span>
      </Link>
    </div>
  );
};

export default NotFound;
