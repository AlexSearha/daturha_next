"use client";
import Link from "next/link";

type ButtonGenericType = {
  href: string;
  title: string;
  target?: string;
};

export default function ButtonGeneric({
  href,
  title,
  target,
}: ButtonGenericType) {
  return (
    <button className="flex justify-center items-center h-12 shadow-lg w-auto border-2 border-black transition-colors p-4 hover:bg-black hover:text-white ">
      <Link href={href} className="font-bold" target={target}>
        {title}
      </Link>
    </button>
  );
}
