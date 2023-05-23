"use client";

import Link from "next/link.js";
import { useParams } from "next/navigation";
import { useEffect } from "react";

async function GetCar(id) {
  const res = await fetch(
    `https://sandbox.codeworksacademy.com/api/cars/${id}`
  );

  if (!res.ok) {
    throw new Error("Something went wrong with the fetch.");
  }
  return res.json();
}

async function DeleteCar(id) {
  console.log("Delete", id);
}

export default async function CarPage() {
  const id = useParams().id;
  const car = await GetCar(id);

  return (
    <div className="container m-auto">
      <Link href={"/cars"}>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-5">
          Go Back
        </button>
      </Link>
      <button
        onClick={() => DeleteCar(id)}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-5 mx-2"
      >
        Delete Car
      </button>
      <div className="grid grid-col-2 mt-5 rounded shadow">
        <img className="rounded shadow" src={car.imgUrl} alt="" />
      </div>
      <div className="grid grid-cols-2 bg-slate-300 text-black mt-5 p-5 rounded">
        <h1>
          Vehicle: {car.year} {car.make} {car.model}
        </h1>
        <h1>Price: ${car.price}</h1>
      </div>
      <div className="grid grid-cols-2 my-5">
        <p>Description: {car.description}</p>
      </div>
    </div>
  );
}
