import { useEffect, useRef, useState } from "react";
import {
  CaseStudy,
  DesktopNav,
  MobileNav,
  ProfileIntroLeftSide,
} from "../components";
import { CenterContent } from "../pages";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useLocation } from "react-router-dom";
import { useData } from "../DataContext";

export const GeneralLayout = () => {
  const [address, setAddress] = useState("");
  const { data } = useData();
  const location = useLocation();
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.documentElement.setAttribute("data-theme", localTheme);
  }, [theme]);
  useEffect(() => {
    setAddress(location?.pathname.split("/")[1]);
  }, [location]);

    const centerDivRef = useRef(null);
    const handleSideScroll = (e) => {
      e.preventDefault();
      if (centerDivRef.current) {
        // Adjust the scroll speed by multiplying e.deltaY by a factor
        // Increase the multiplier to make the scroll faster
        const scrollSpeedMultiplier = 4; // Adjust this value as needed
        centerDivRef.current.scrollTop += e.deltaY * scrollSpeedMultiplier;
      }
    }
  return (
    <div className="w-full gap-8 flex px-3 xl:px-5 lg:px-3 md:px-3 lg:flex-row flex-col justify-between items-start min-h-screen bg-[#18191A] mt-8 md:mt-0 ">
      {/* Leftmost column */}
      <div
        
        className="w-full lg:mt-4 pt-12  lg:w-[25%] sm:w-[50%] justify-center items-start overflow-y-auto "
        onWheel={handleSideScroll}
      >
        <ProfileIntroLeftSide />
      </div>

      {/* Center column */}
      <div ref={centerDivRef} className="w-full h-full lg:w-[69%]   xl:px-7  px-4  3xl:mr-[23%] flex justify-center z-20 items-start lg:h-screen overflow-y-scroll bg-transparent 3xl:max-w-[900px] xl:ml-[0%]">
        {address === "case-study" ? <CaseStudy /> : <CenterContent />}
      </div>

      {/* Rightmost column (conditionally rendered) */}
      <div
        className=" lg:block h-full pt-12 lg:mt-4 flex  justify-center items-start  lg:max-w-sm" style={{zIndex:9999}}
        onWheel={handleSideScroll}
      >
        <DesktopNav />
      
      </div>
      {/* <div className="absolute h-[10vh] right-2 top-5 border-t border-b border-l border-r- rounded-2xl rounded-tr-none rounded-br-none border-night-black p-3">
        <div >
          <label className="swap swap-rotate w-12 h-12">
            <input type="checkbox" onChange={handleToggle} />
            <SunIcon
              alt="light"
              className="w-8 h-8 swap-on hover:animate-spin"
            />
            <MoonIcon
              alt="dark"
              className="w-8 h-8 swap-off hover:animate-spin"
            />
          </label>
        </div>
      </div> */}
    </div>
  );
};
