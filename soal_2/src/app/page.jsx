import { fetchProducts } from "@/action";
import Link from "next/link";

export default async function Home() {
  const products = await fetchProducts();

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
            <th>Action</th>
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
                <td>
                  <Link
                    href={`edit/${product.id}`}
                    className="btn bg-sky-700 text-white hover:bg-sky-600">
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
