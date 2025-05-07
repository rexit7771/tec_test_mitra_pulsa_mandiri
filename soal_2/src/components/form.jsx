"use client";

export default function Form({ formName }) {
  return (
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
  );
}
