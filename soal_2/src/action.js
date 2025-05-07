export const fetchCategories = async () => {
    const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/categories"
    );
    const categoriesJson = await response.json();
    return categoriesJson.data;
};

export const fetchProducts = async () => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
            {
                method: "GET",
            }
        );
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchProductById = async (id) => {
    const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `/products/${id}`,
    );
    const productJson = await response.json();
    return productJson.data;
}

export const updateProductById = async (formData) => {
    const id = formData.get("id");
    const body = {
        name: formData.get("name"),
        price: Number(formData.get('price')),
        stock: Number(formData.get("stock")),
        category_id: Number(formData.get("category"))
    }

    const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `/products/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
    )

    const result = await response.json();
    return result.message
}