"use client";

import Link from "next/link.js";
import React from "react";

async function GetCars() {
  const res = await fetch("https://sandbox.codeworksacademy.com/api/cars");

  if (!res.ok) {
    throw new Error("Something went wrong with the fetch.");
  }
  return res.json();
}

export default async function CarsPage() {
  const carsData = await GetCars();
  await console.log("[CARS DATA]", carsData);
  const cars = await Promise.all(carsData);

  return (
    <>
      <div className="grid grid-cols-6 mx-5">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-5">
          Sell Car
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 justify-around p-5 ">
        {cars.map((c) => (
          <div key={c.id} className="shadow-md">
            {/* <Image
              src={c.imgUrl}
              height={100}
              width={100}
              alt="Picture of Car."
            /> */}
            <Link href={`/cars/${c.id}`}>
              <img
                className="object-cover hover:object-scale-down h-48 w-96 rounded"
                src={c.imgUrl}
              />
            </Link>
            <p className="text-lg">
              {c.make} {c.model}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
