import clsx from "clsx";
import React, { useContext } from "react";
import { DailyContext } from "./Context";

declare const window: any;

function UniverseSwitch() {
  const { forceDailies } = useContext(DailyContext);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let clickedNumber = Number((e.target as HTMLDivElement).title);
    if (window.daily_universe === clickedNumber) {
      return;
    } else {
      window.daily_universe = clickedNumber;
      forceDailies();
    }
  };

  return (
    <div className="flex mt-5 shadow-md">
      <div
        className={clsx(
          window.daily_universe === 1
            ? "bg-blue-500 text-white"
            : "bg-secondary text-primary",
          "p-2 text-xs border border-r-0 border-solid border-prpl rounded rounded-r-none cursor-pointer select-none sm:text-base"
        )}
        onClick={handleClick}
        title="1"
      >
        Universe 1
      </div>
      <div
        className={clsx(
          window.daily_universe === 2
            ? "bg-pink-500 text-white"
            : "bg-secondary text-primary",
          "p-2 text-xs border border-l-0 border-solid border-prpl rounded rounded-l-none cursor-pointer select-none sm:text-base"
        )}
        onClick={handleClick}
        title="2"
      >
        Universe 2
      </div>
    </div>
  );
}

export default UniverseSwitch;
