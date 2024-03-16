import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/signup"}>Signup</Link>
      <Link to={"/flashcards"}>Flashcards</Link>
    </div>
  );
}

export default Header;
