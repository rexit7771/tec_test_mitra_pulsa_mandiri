"use client";
import { fetchCategories } from "@/action";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AddProduct() {
  const router = useRouter();

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [category_id, setCategory_id] = useState(0);

  const getAllCategories = async () => {
    setCategories(await fetchCategories());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/products",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            price: Number(price),
            stock: Number(stock),
            category_id: Number(category_id),
          }),
        }
      );
      const message = await response.json();
      console.log(message.message);
      router.push("/");
    } catch (error) {}
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <h1 className="text-2xl">Add Product</h1>
      <form
        onSubmit={handleSubmit}
        className="mt-5 mx-auto p-3 flex flex-col gap-4 w-1/2">
        <div className="form-control flex flex-col">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="input w-100"
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
            required
          />
        </div>
        <div className="form-control flex flex-col">
          <label htmlFor="">Price</label>
          <input
            type="number"
            className="input w-100"
            onChange={(e) => {
              setPrice(e.currentTarget.value);
            }}
            required
          />
        </div>
        <div className="form-control flex flex-col">
          <label htmlFor="">Stock</label>
          <input
            type="number"
            className="input w-100"
            onChange={(e) => {
              setStock(e.currentTarget.value);
            }}
            required
          />
        </div>
        <div className="form-control flex flex-col">
          <label htmlFor="">Category</label>
          <select
            className="select w-100"
            defaultValue={""}
            onChange={(e) => {
              setCategory_id(e.currentTarget.value);
            }}
            required>
            <option value="" disabled>
              Choose Category
            </option>
            {categories.map((category, index) => {
              return (
                <option key={index} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>

        <input
          type="submit"
          value="Submit"
          className="btn bg-blue-800 text-white w-1/4 "
        />
      </form>
    </>
  );
}
