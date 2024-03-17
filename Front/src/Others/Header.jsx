import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/signup"}>Signup</Link>
      <Link to={"/collection"}>Collection</Link>
    </div>
  );
}

export default Header;
