export async function getShoes() {
    const url = "http://localhost:5000/api/shoes";

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
    const url = `http://localhost:5000/api/shoes/${id}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        };

        const data = await response.json();
        return data;

    } catch (error) {
        const data = await error.message;
        return data;
    }
}