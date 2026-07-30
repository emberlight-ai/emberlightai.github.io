import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-white px-4 text-center">
      <Heart className="w-20 h-20 text-pink-600 mb-6" />
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Oops! This page seems to be playing hard to get.</p>
      <p className="text-lg text-gray-500 max-w-md mb-8">
        We couldn't find the page you're looking for. It might have ghosted us.
      </p>
      <Link
        href="/"
        className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
