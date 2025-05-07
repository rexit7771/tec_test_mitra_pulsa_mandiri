import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-blue-900 text-white shadow-sm">
      <div className="navbar-start">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Technical Test
        </Link>
        <Link href={"/add"} className="btn btn-ghost text-l">
          Add Product
        </Link>
      </div>
    </div>
  );
}
