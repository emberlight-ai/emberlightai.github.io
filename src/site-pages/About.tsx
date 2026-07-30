import React from 'react';

export default function About() {
  return (
    <div className="py-24 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        <p className="text-xl text-gray-600">
          Emberlight AI is a startup building a social travel platform that connects users based on shared geographic history.
        </p>
        <p className="text-xl text-gray-600 mt-4">
          Contact us at: <a href="mailto:ceo@emberlightai.com" className="text-blue-600 hover:underline">ceo@emberlightai.com</a>
        </p>
      </div>
    </div>
  );
}
