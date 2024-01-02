import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="bg-yellow-500 uppercase p-4 border-b-4 border-stone-200 sm:px-6">
      <Link to="/" className="tracking-widest">Fast React Pizza Co.</Link>

      <SearchOrder />
      <Username />
    </header>
  );
}
