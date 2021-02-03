import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButton from "./CartButton";
import {useProductContext} from '../context/product_context'
import { useUserContext } from "../context/userContext";

const Navbar = () => {
  const {openSideBar} = useProductContext()
  const {myUser} = useUserContext()
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
      </div>
      <ul>
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          );
        })}
        {
          myUser ? <li><Link to='/checkout'>checkout</Link></li>: null
        }
      </ul>
      <CartButton />
    </nav>
  );
};

export default Navbar;
