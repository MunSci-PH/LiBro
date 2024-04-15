import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | MunSci LiBro",
};

export default function About() {
  return (
    <>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="max-w-2xl text-center mx-auto">
          <div className="mt-5 max-w-2xl">
            <h1 className="block font-extrabold text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-green-600 to-lime-500 text-transparent dark:from-green-400 dark:to-lime-400">
              About
            </h1>
          </div>

          <div className="mt-5 max-w-3xl">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              LiBro is a research study made to enhance the experience of
              borrowing a book in the library. By no longer requiring you to
              find your book in person, this will make finding a book faster and
              convenient.
            </p>
          </div>
        </div>
        <div className="max-w-2xl text-center mx-auto my-8">
          <div className="mt-5 max-w-2xl">
            <h1 className="block font-extrabold text-3xl md:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-green-600 to-lime-500 text-transparent dark:from-green-400 dark:to-lime-400">
              The Team
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 my-8">
              <div className="text-center">
                <Image
                  className="rounded-full size-24 mx-auto"
                  src="/aboutpics/jas.jpg"
                  width={96}
                  height={96}
                  alt="Jasmine Caye Raymundo"
                />
                <div className="mt-2 sm:mt-4">
                  <h3 className="font-medium">Jasmine Caye Raymundo</h3>
                </div>
              </div>
              <div className="text-center">
                <Image
                  className="rounded-full size-24 mx-auto"
                  src="/aboutpics/si.jpg"
                  width={96}
                  height={96}
                  alt="Sulpicio IV Demontaño"
                />
                <div className="mt-2 sm:mt-4">
                  <h3 className="font-medium">Sulpicio IV Demontaño</h3>
                </div>
              </div>
              <div className="text-center">
                <Image
                  className="rounded-full size-24 mx-auto"
                  src="/aboutpics/gab.jpg"
                  width={96}
                  height={96}
                  alt="Gabriel Nathan Toledo"
                />
                <div className="mt-2 sm:mt-4">
                  <h3 className="font-medium">Gabriel Nathan Toledo</h3>
                </div>
              </div>
              <div className="text-center">
                <Image
                  className="rounded-full size-24 mx-auto"
                  src="/aboutpics/princess.jpg"
                  width={96}
                  height={96}
                  alt="Princess Denise Parayno"
                />
                <div className="mt-2 sm:mt-4">
                  <h3 className="font-medium">Princess Denise Parayno</h3>
                </div>
              </div>
              <div className="text-center">
                <Image
                  className="rounded-full size-24 mx-auto"
                  src="/aboutpics/elayne.png"
                  width={96}
                  height={96}
                  alt="Elayne Abad"
                />
                <div className="mt-2 sm:mt-4">
                  <h3 className="font-medium">Elayne Abad</h3>
                </div>
              </div>
              <div className="text-center">
                <Image
                  className="rounded-full size-24 mx-auto"
                  src="/aboutpics/karl.jpg"
                  width={96}
                  height={96}
                  alt="Karl Hendrix Ruiz"
                />
                <div className="mt-2 sm:mt-4">
                  <h3 className="font-medium">Karl Hendrix Ruiz</h3>
                </div>
              </div>
              <div className="text-center">
                <Image
                  className="rounded-full size-24 mx-auto"
                  src="/aboutpics/janna.jpg"
                  width={96}
                  height={96}
                  alt="Janna Mary Delfino"
                />
                <div className="mt-2 sm:mt-4">
                  <h3 className="font-medium">Janna Mary Delfino</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
