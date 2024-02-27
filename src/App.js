import { useEffect } from "react";
import { useState } from "react";
import { GeneralLayout } from "./themes/GenralLayout";
import { BackgroundImage, CaseStudy, MobileNav } from "./components";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CustomCursor } from "./themes/CustomCursor";
import instance from "./api";
function App() {
  const [data, setData] = useState(null);
  const getPortfolio = async () => {
    const developer_info_getter = await fetch(
      "http://localhost:5000/developer_info/6450cb8a8eb415ba6bd72ae9"
    ).then((res) => res.json());
    const service_getter = await fetch(
      "http://localhost:5000/service/6450cb8a8eb415ba6bd72ae9"
    ).then((res) => res.json());
    const project_getter = await fetch(
      "http://localhost:5000/project/6450cb8a8eb415ba6bd72ae9"
    ).then((res) => res.json());
    const testimonial_getter = await fetch(
      "http://localhost:5000/testimonial/6450cb8a8eb415ba6bd72ae9"
    ).then((res) => res.json());
    console.log(developer_info_getter);
    console.log(service_getter);
    console.log(project_getter);
    console.log(testimonial_getter);
    const developer_info = developer_info_getter.data;
    const service = service_getter.data;
    const project = project_getter.data;
    const testimonial = testimonial_getter.data;
    setData({ ...data, developer_info, service, project, testimonial });
  };
  useEffect(() => {
    getPortfolio();
  }, []);
  const i_id = "6450cb8a8eb415ba6bd72ae9";
  const getProfileImg = async (e) => {
    try {
      const req = await instance.get(`/file/${i_id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(req);
    } catch (err) {
      console.log(err);
      // navigate('/reports');
    }
  };
  const getUserId = async (userName) => {
    try {
      const req = await instance.get(`/developer_info/fetchId?userName=${userName}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(req);
    } catch (err) {
      console.log(err);
      // Handle errors as needed
    }
  };

  useEffect(() => {
    getProfileImg();
    getUserId("shuja");
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
        <Route path="/" element={<GeneralLayout />} />
        <Route path="/case-study" element={<GeneralLayout />} />
      </Routes>
    </div>
  );
}

export default App;
