import { addProduct, fetchCategories } from "@/action";

export default async function AddProduct() {
  const categories = await fetchCategories();

  const handleSubmit = async (e) => {
    "use server";
    e.preventDefault();
    try {
      const message = await addProduct();
      console.log(message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="text-2xl">Add Product</h1>
      <form
        action={handleSubmit}
        className="mt-5 mx-auto p-3 flex flex-col gap-4 w-1/2">
        <div className="form-control flex flex-col">
          <label htmlFor="">Name</label>
          <input
            name="name"
            type="text"
            className="input validator w-100"
            required
          />
          <p className="validator-hint">Name is required</p>
        </div>
        <div className="form-control flex flex-col">
          <label htmlFor="">Price</label>
          <input
            type="number"
            className="input validator w-100"
            required
            min="1"
            max="10"
            title="Must be between be 1 to 10"
          />
          <p className="validator-hint">Price must be between be 1 to 10</p>
        </div>
        <div className="form-control flex flex-col">
          <label htmlFor="">Stock</label>
          <input
            name="stock"
            type="number"
            defaultValue={0}
            className="input w-100"
            required
          />
        </div>
        <div className="form-control flex flex-col">
          <label htmlFor="">Category</label>
          <select
            name="category_id"
            className="select w-100"
            defaultValue={""}
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
