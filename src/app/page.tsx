"use client";
//this page will be notetaking for the whole school stuff.
import { useState } from "react";
import { Button } from "@/components/ui/button";
import RealTimeDipslay from "../app/_components/RealTimeDipslay";
import { Card } from "@/components/ui/card";
export default function LandingPage() {
  const [showNotes, setShowNotes] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <div className="box-border w-full h-screen bg-gray-700 flex flex-col align-center ">
        <div className="w-full h-20 bg-gray-500 flex p-10">
          <div className="w-5xl flex flex-row align-center justify-between p-10 text-2xl text-white">
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
            {showNotes && (
              <div className="top-12 absolute w-1/3 h-1/3 bg-gray-200">
                Notes
              </div>
            )}
            <RealTimeDipslay />
            <button
              className="w-fit h-10 bg-gray-400"
              onMouseEnter={() => {
                setShowLinks(true);
              }}
            >
              Project Links
            </button>
          </div>
        </div>
        <div>Recent</div>
      </div>
    </>
  );
}
