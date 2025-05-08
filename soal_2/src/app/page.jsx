"use client";
import { fetchProducts } from "@/action";
import { SearchIcon } from "@/icons/searchIcon";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("name");

  const getProducts = async () => {
    try {
      setProducts(await fetchProducts());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    if (!search) return true;
    const searchProducts = search.toLowerCase();
    switch (searchBy) {
      case "name":
        return product.name.toLowerCase().includes(searchProducts);
      case "price":
        return product.price.toString().includes(searchProducts);
      case "stock":
        return product.stock.toString().includes(searchProducts);
      case "category":
        return product.category.toLowerCase().includes(searchProducts);
      default:
        return product;
    }
  });

  return (
    <>
      <div className="flex justify-between">
        <div></div>
        <div className="mb-5 flex flex-row gap-2">
          <label className="input">
            <SearchIcon />
            <input
              type="search"
              name="search"
              required
              placeholder="Search"
              defaultValue={""}
              onChange={(e) => {
                setSearch(e.currentTarget.value);
              }}
            />
          </label>
          <select
            defaultValue={searchBy}
            className="select"
            onChange={(e) => {
              setSearchBy(e.currentTarget.value);
            }}>
            <option value={"name"}>Name</option>
            <option value={"price"}>Price</option>
            <option value={"stock"}>Stock</option>
            <option value={"category"}>Category</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto rounded-box border">
        <table className="table">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => {
                return (
                  <tr className="hover:bg-base-300" key={index}>
                    <th>{index + 1}</th>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.category}</td>
                    <td>
                      <Link
                        href={`edit/${product.id}`}
                        className="btn bg-sky-700 text-white hover:bg-sky-600">
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>Products not found...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
