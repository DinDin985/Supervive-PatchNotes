"use client";
import { useAtom } from "jotai";

import { toggleFanWarningAtom } from "../atoms/globalState";

import { Tusker5700 } from "../fonts";

export default function FanWarning() {
  const [toggleFanWarning, setToggleFanWarning] = useAtom(toggleFanWarningAtom);

  return (
    <div
      className={`${toggleFanWarning ? "fixed" : "hidden"} left-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center bg-black`}
    >
      <div className="flex flex-col items-center justify-center">
        <p
          className={`${Tusker5700.className} mb-5 w-[80%] text-center text-4xl tracking-wide`}
        >
          This isn&apos;t by the official SUPERVIVE team and just a fan-made
          creation
        </p>
        <button
          onClick={() => setToggleFanWarning(false)}
          className={`${Tusker5700.className} z-[9999] rounded-lg bg-white p-5 uppercase tracking-wider text-black`}
        >
          I Understand
        </button>
      </div>
    </div>
  );
}
