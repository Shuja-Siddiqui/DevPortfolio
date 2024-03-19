import React, { useEffect } from "react";
import { BackgroundImage, MobileNav } from "./components";
import { Routes, Route, useLocation } from "react-router-dom";
import { CustomCursor } from "./themes/CustomCursor";
import { useData } from "./DataContext";
import { GeneralLayout } from "./themes/GenralLayout";
function App() {
  const { data } = useData();
  const location = useLocation();
  const id = location.pathname.split("/").pop();

  useEffect(() => {
    const getPortfolio = async () => {
      try {
        const res = await fetch(
          `http://192.168.0.104:5000/api/v1/developer/${id}`,
          { method: "GET" }
        );
        const dev = await res.json();
        console.log(dev)
        data(dev);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      getPortfolio();
    }
  }, [id]);
  console.log(data);
  return (
    <div className="w-full h-screen bg-primaryLight dark:bg-[#191923]">
      <div className="w-full lg:hidden bg-transparent min-h-[70px] fixed top-0 z-50">
        <MobileNav />
      </div>
      <CustomCursor />
      <BackgroundImage />
      <Routes>
        <Route path="/:id" element={<GeneralLayout />} />
        <Route path="/case-study" element={<GeneralLayout />} />
      </Routes>
    </div>
  );
}

export default App;
