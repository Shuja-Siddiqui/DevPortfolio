import { useEffect } from "react";
import { useState } from "react";
import { GeneralLayout } from "./themes/GenralLayout";
import { BackgroundImage, MobileNav } from "./components";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import { CustomCursor } from "./themes/CustomCursor";
function App() {
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);
  const location = useLocation();
  const BASE_URL =
    process.env === "local" ? "localhost:5000/api/v1/developer" : "/";
  const getPortfolio = async () => {
    console.log(id);
    const res = await fetch(
      `http://192.168.0.104:5000/api/v1/developer/${id}`,
      { method: "GET" }
    ).then((res) => res.json());
    setData(res);
  };

  useEffect(() => {
    if (id) {
      // Check if id is not empty before fetching
      getPortfolio();
    }
  }, [id]); // Added id as a dependency

  useEffect(() => {
    setId(location.pathname.split("/").pop());
  }, []);

  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    });
  }, []);
  return (
    <div className=" w-full  h-screen bg-primaryLight dark:bg-[#191923]">
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
