import Navbar from "../components/Navbar";
import Seccondnav from "../components/seccond-nav";

const index = () => {
  return (
    <>
    <div className="main">
     <Navbar/>
     <div className="hero-cont">
     <h1 className="heading-one">HELLO I'M PIYUSH</h1>
     <p className="p-one"> Offer UI/UX, web design, development, and graphic design services with a focus on user-centered designs. Explore my portfolio to see my skills and creativity in action</p>
     <button className="btn-prime">EXPLORE WORKS</button>
     <Seccondnav/>
     </div>
    </div>
    </>
  );
};
export default index;
