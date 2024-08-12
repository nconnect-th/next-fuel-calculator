// app/page.tsx
"use client";

import FuelCalculator from '../components/FuelCalculator';

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <FuelCalculator />
      </main>
    </div>
  );
}
