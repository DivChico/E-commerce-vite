import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { actGetCartItems } from "../store/cart/cartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetCartItems());

    return () => {};
  }, []);

  return (
    <header className="border-b-2  ">
      <div className=" bg-black p-2 text-sm text-white flex item-center justify-center">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className=" ml-2 underline font-semibold hover:cursor-pointer">
            ShopNow
          </span>
        </p>
      </div>
      <nav className="flex py-4 px-10 space-x-4 items-center">
        <Link>
          <p className="font-bold text-3xl ">Exclusive</p>
        </Link>
        <div className="flex-1 items-center justify-around flex">
          <div className="flex space-x-4 items-center">
            <Link>
              <div className=" p-1 border-b-2 border-black hover:cursor-pointer ">
                <p className="font-semibold text-sm">home</p>
              </div>
            </Link>

            <Link to={"/categories"}>
              <div className=" p-1 hover:cursor-pointer  ">
                <p className="font-semibold text-sm">Categories</p>
              </div>
            </Link>

            <div className=" p-1 hover:cursor-pointer  ">
              <p className="font-semibold text-sm">Contact</p>
            </div>
            <div className=" p-1 hover:cursor-pointer  ">
              <p className="font-semibold text-sm">About</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 px-2  rounded-sm">
          <input
            type="text"
            name=""
            id=""
            placeholder="what are you locking for ?"
            className="bg-gray-100 p-2 text-xs rounded-lg outline-none border-none"
          />
          <button className="text-xs">
            <SearchIcon />
          </button>
        </div>
        <Link to={"/wishlist"}>
          <button className="text-xs">
            <FavoriteIcon />
          </button>
        </Link>
        <Link to={"/cart"}>
          <button className="text-xs">
            <ShoppingCartIcon />
          </button>
        </Link>
        <Link to={"/cart"}>
          <button className="text-xs">
            <PersonIcon />
          </button>
        </Link>{" "}
      </nav>
    </header>
  );
}

export default Header;
