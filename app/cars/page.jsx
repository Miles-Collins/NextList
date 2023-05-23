"use client";

import Link from "next/link.js";
import React from "react";

async function GetCars() {
  const res = await fetch("https://sandbox.codeworksacademy.com/api/cars");

  if (!res.ok) {
    throw new Error("Something went wrong with the fetch.");
  }
  return res.json();
  // const results = await res.json();
  // console.log("CAR RESULTS", results);
}

function Header() {
  return <h1 className="text-4xl">To the moon 🚀</h1>;
}

// useEffect(() => {
//   getCars();
// }, []);

export default async function CarsPage() {
  const carsData = await GetCars();

  const cars = await Promise.all(carsData);

  return (
    <>
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
                className="object-cover hover:object-scale-down h-48 w-96"
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
