
"use client";

import { useState } from "react";
import { db } from "../firebaseConfig"; // Adjust path as necessary
import { collection, query, where, getDocs } from "firebase/firestore";
import Image from "next/image";

export default function Home() {
  const [cafes, setCafes] = useState<string[]>([]);
  const [restaurants, setRestaurants] = useState<string[]>([]);
  const [viewCafes, setViewCafes] = useState<boolean>(false);
  const [viewRestaurants, setViewRestaurants] = useState<boolean>(false);

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
      setViewRestaurants(false); // Hide restaurants when cafes are shown
    } catch (error) {
      console.error("Error fetching cafes: ", error);
    }
  };

  const fetchRestaurants = async () => {
    try {
      const q = query(
        collection(db, "businesses"),
        where("type", "==", "Restaurant")
      );
      const querySnapshot = await getDocs(q);
      const restaurantList: string[] = [];
      querySnapshot.forEach((doc) => {
        restaurantList.push(doc.data().name);
      });
      setRestaurants(restaurantList);
      setViewRestaurants(true);
      setViewCafes(false); // Hide cafes when restaurants are shown
    } catch (error) {
      console.error("Error fetching restaurants: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-orange-500 flex flex-col items-center justify-center p-8">
      <main className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md text-center">
        {/* Logo */}
        <Image
          className="mb-6"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          See Cafes & Restaurants
        </h1>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            className="bg-[#00FFFF] hover:bg-[#00CED1] text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
            onClick={fetchCafes}
          >
            Cafes
          </button>
          <button
            className="bg-[#00FFFF] hover:bg-[#00CED1] text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
            onClick={fetchRestaurants}
          >
            Restaurants
          </button>
        </div>

        {/* Displaying the list of cafes */}
        {viewCafes && (
          <ul className="text-left list-disc list-inside text-lg text-gray-700">
            {cafes.map((cafe, index) => (
              <li key={index}>{cafe}</li>
            ))}
          </ul>
        )}

        {/* Displaying the list of restaurants */}
        {viewRestaurants && (
          <ul className="text-left list-disc list-inside text-lg text-gray-700">
            {restaurants.map((restaurant, index) => (
              <li key={index}>{restaurant}</li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
