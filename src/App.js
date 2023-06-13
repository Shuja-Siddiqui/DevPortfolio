import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Services from "./components/Service/Services";
import { useEffect } from "react";
import { useState } from "react";
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
    const developer_info = developer_info_getter.data;
    const service = service_getter.data;
    const project = project_getter.data;
    const testimonial = testimonial_getter.data;
    setData({ ...data, developer_info, service, project, testimonial });
  };
  useEffect(() => {
    getPortfolio();
  }, []);

  console.log("Whole data is", data);

  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent data={data?.developer_info} />
      </Banner>
      <Services data={data?.service} />
      <LightColor>
        <Projects data={data?.project} />
      </LightColor>
      <Clients data={data?.testimonial} />
      <LightColor>
        <Footer data={data?.developer_info} />
      </LightColor>
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
