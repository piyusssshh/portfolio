import Link from "next/link";


const navbar = () => {
  return (
    <>
      <nav>
        <Link href="/">
        <h1>GFX.PIYUSH</h1>

        </Link>
        <ul>
          <Link href="/work">
            <h3>Works</h3>
          </Link>
          <Link href="/contact">
            <h3>Contact</h3>
          </Link>
        </ul>
      </nav>
    </>
  );
};
export default navbar;
