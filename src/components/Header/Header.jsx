import { Link } from "react-router-dom";
import { Nav } from "./Navbar/Nav";

const Header = () => {
  return (
    <header className="flex flex-col px-3 py-2 justify-center items-center w-full h-auto">
      <Nav />
      <section className="flex w-4/5 justify-around px-3 py-2">
        <Link to="/" className="font-semibold cursor-pointer hover:scale-105">
          New{" "}
        </Link>{" "}
        <Link to="/" className="font-semibold cursor-pointer hover:scale-105">
          Wear{" "}
        </Link>{" "}
        <Link to="/" className="font-semibold cursor-pointer hover:scale-105">
          Accessories{" "}
        </Link>{" "}
        <Link to="/" className="font-semibold cursor-pointer hover:scale-105">
          Bags{" "}
        </Link>{" "}
        <Link to="/" className="font-semibold cursor-pointer hover:scale-105">
          Toys{" "}
        </Link>{" "}
        <Link to="/" className="font-semibold cursor-pointer hover:scale-105">
          Shoes{" "}
        </Link>{" "}
        <Link
          to="/"
          className="font-bold text-red-400 cursor-pointer hover:scale-105"
        >
          Sales{" "}
        </Link>{" "}
      </section>{" "}
    </header>
  );
};

export default Header;
