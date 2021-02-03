import logo from "../assets/logo.svg";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButton from "./CartButton";
import { useProductContext } from "../context/product_context";
import { useUserContext } from "../context/userContext";

const Sidebar = () => {
  const { isSideBarOpen, closeSideBar } = useProductContext();
  const {myUser} = useUserContext()
  return (
    <div>
      <aside>
        <div className="sidebar-header">
          <img src={logo} alt="comfy ecommerce" />
          <button className="close-btn" onClick={closeSideBar}>
            <FaTimes />
          </button>
        </div>
        <ul>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {myUser ? (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          ) : null}
        </ul>
        <CartButton />
      </aside>
    </div>
  );
};
export default Sidebar;
