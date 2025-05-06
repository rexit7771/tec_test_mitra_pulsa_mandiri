"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="overflow-x-auto rounded-box border">
      <table className="table">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr className="hover:bg-base-300" key={index}>
                <th>{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
