import Navbar from "../components/Navbar";
import Head from "next/head";

const index = () => {
  return (
    <>
    <div className="main">
      <Head/>
     <Navbar/>
     <div className="hero-cont">
     <h1 className="heading-one">HELLO I'M PIYUSH</h1>
     <p className="p-one"> offer UI/UX, web design, development, and graphic design services with a focus on user-centered designs. Explore my portfolio to see my skills and creativity in action</p>
     <button className="btn-prime">EXPLORE WORKS</button>
     </div>

    </div>
    </>
  );
};
export default index;
