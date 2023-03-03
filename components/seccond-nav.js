import Link from "next/link";
const seccontnav =()=>{
    return(
        <>
        
        <ul className="seccond-nav">
          <Link href="/work">
            <h3>UI UX</h3>
          </Link>
          <Link href="/contact">
            <h3>WEB DESIGN</h3>
          </Link>
          <Link href="/contact">
            <h3>DEVELOPMENT</h3>
          </Link>
          <Link href="/contact">
            <h3>GRAPHICS</h3>
          </Link>
        </ul>
        
        
        </>

    );
};
export default seccontnav;