"use client";

import { useParams } from "next/navigation";

export default function CarPage() {
  let car = [];
  const id = useParams().id;
  console.log("CarPage Params: ", id);

  async function getCar() {
    const res = await fetch(
      `https://sandbox.codeworksacademy.com/api/cars/${id}`
    );

    if (!res.ok) {
      throw new Error("Something went wrong with the fetch.");
    }
    car = await res.json();
    return car;
  }

  getCar();

  return <h1>{car}</h1>;
}
