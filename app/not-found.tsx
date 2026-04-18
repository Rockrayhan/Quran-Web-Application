import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4 space-y-4">
      
      <h1 className="text-5xl font-bold">404</h1>

      <h2 className="text-xl font-semibold">
        Page not found
      </h2>

      <p className="text-gray-500 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
      >
        Go back home
      </Link>
    </div>
  );
}