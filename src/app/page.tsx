"use client";

import { useState } from "react";
import { db } from "../firebaseConfig"; // Adjust path as necessary
import { collection, query, where, getDocs } from "firebase/firestore";
import Image from "next/image";

export default function Home() {
  const [cafes, setCafes] = useState<string[]>([]);
  const [viewCafes, setViewCafes] = useState<boolean>(false);

  const fetchCafes = async () => {
    try {
      const q = query(collection(db, "businesses"), where("type", "==", "Cafe"));
      const querySnapshot = await getDocs(q);
      const cafesList: string[] = [];
      querySnapshot.forEach((doc) => {
        cafesList.push(doc.data().name);
      });
      setCafes(cafesList);
      setViewCafes(true);
    } catch (error) {
      console.error("Error fetching cafes: ", error);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick={fetchCafes}
          >
            Cafes
          </button>
          <button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >
            Restaurants
          </button>
        </div>

        {/* Displaying the list of cafes */}
        {viewCafes && (
          <ul className="list-disc list-inside mt-8">
            {cafes.map((cafe, index) => (
              <li key={index}>{cafe}</li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
