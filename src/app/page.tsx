"use client";
//this page will be notetaking for the whole school stuff.
import { useState } from "react";
import { useRouter } from "next/navigation";
import RealTimeDipslay from "../app/_components/RealTimeDipslay";
import Link from "next/link";

export default function LandingPage() {
  const [showNotes, setShowNotes] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const router = useRouter();
  return (

    <div id="body" className="relative box-border w-full h-screen bg-gray-700">
      <div id="header" className="w-full h-20 bg-gray-500 flex items-center justify-center ">
        <div className="flex flex-row items-center gap-20">
          <RealTimeDipslay />
          <button
            className="w-fit px-10 rounded-2xl h-10 bg-gray-400"
            onMouseEnter={() => {
              setShowNotes(true);
            }}
            onMouseLeave={() => {
              setShowNotes(false);
            }}
          >
            Notes
          </button>
          <button
            className="w-fit px-10 rounded-2xl h-10 bg-gray-400"

            onClick={() => {
              setShowLinks(true);
            }}
          >
            Project Links
          </button>
          <button className="w-fit px-10 rounded-2xl h-10 bg-gray-400">Recent</button>
        </div>
      </div>
      <div className="w-screen h-fit p-10">
        {showLinks && (
          <>
            <div className="w-120 h-120 bg-gray-300 bg-opacity-50 rounded-2xl p-8">
              Links:
              <div>
                <Link href="/moviedynamic" className="hover:text-blue-800">Dynamic movie</Link>
              </div>
              <button onClick={() => {
                return <>
                  <div>
                    <Link href="/SmallProjects/carousel" className="hover:text-blue-800">Carousel</Link>
                  </div>
                  <div>
                    <Link href="/SmallProjects/realEstate" className="hover:text-blue-800">Real Estate</Link>
                  </div>


                </>
              }}>Other Small Projects</button>

            </div></>
        )}
      </div>
    </div>

  );
}
//on-hover display plans:
//