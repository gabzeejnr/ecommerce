export async function getShoes() {
    const url = "https://ecommerce-backend-ogas.onrender.com/api/shoes";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Couldnt fetch products");
        };

        const data = await response.json();
        return {
            shoes: data
        };

    } catch (error) {
        console.error("Error found at", error);

    }
}

export async function getShoeById(id) {
    const url = `https://ecommerce-backend-ogas.onrender.com/api/shoes/${id}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Couldnt fetch product");
        };

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error found at", error);

    }
}