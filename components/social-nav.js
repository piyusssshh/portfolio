import Link from "next/link";
const socialNav =()=>{
    return(
        <>
        
        <ul className="seccond-nav">
          <Link href="https://instagram.openinapp.co/gfxpiyush" target="_blank">
            <h3>Instagram</h3>
          </Link>
          <Link href="mailto: mvps1862@gmail.com" target="_blank">
            <h3>Mail</h3>
          </Link>
          <Link href="https://openinapp.co/twitter/piyusssshh" target="_blank">
            <h3>Twitter</h3>
          </Link>
          <Link href="https://openinapp.co/linkedin/0d90e" target="_blank">
            <h3>LinkedIn</h3>
          </Link>
          <Link href="https://openinapp.co/snapchat/027b4" target="_blank">
            <h3>SnapChat</h3>
          </Link>
        </ul>
        
        
        </>

    );
};
export default socialNav;