import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 text-gray-800 p-6">
      <h1 className="text-5xl font-bold mb-4">🌟 Bright Stories</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        Create magical, personalized storybooks for your child — powered by creativity and AI.
      </p>
      <Link
        href="/customize"
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md text-lg transition"
      >
        Start Your Story
      </Link>
    </main>
  );
}
