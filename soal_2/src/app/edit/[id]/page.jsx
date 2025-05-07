import { fetchCategories, fetchProductById, updateProductById } from "@/action";
import { redirect } from "next/navigation";

async function handleUpdateProduct(formData) {
  "use server";
  await updateProductById(formData);
  redirect("/");
}

export default async function EditProduct({ params }) {
  const { id } = await params;

  const categories = await fetchCategories();
  const product = await fetchProductById(id);

  return (
    <>
      <h1 className="text-2xl">Edit Product</h1>
      <form
        action={handleUpdateProduct}
        className="mt-5 mx-auto p-3 flex flex-col gap-4 w-1/2">
        <input type="hidden" name="id" value={id} />
        <div className="form-control flex flex-col">
          <label htmlFor="">Name</label>
          <input
            name="name"
            type="text"
            className="input w-100"
            defaultValue={product.name}
            required
          />
        </div>
        <div className="form-control flex flex-col">
          <label htmlFor="">Price</label>
          <input
            name="price"
            type="number"
            className="input w-100"
            defaultValue={product.price}
            required
          />
        </div>
        <div className="form-control flex flex-col">
          <label htmlFor="">Stock</label>
          <input
            name="stock"
            type="number"
            className="input w-100"
            defaultValue={product.stock}
            required
          />
        </div>
        <div className="form-control flex flex-col">
          <label htmlFor="">Category</label>
          <select
            name="category"
            className="select w-100"
            defaultValue={product.category_id}
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
