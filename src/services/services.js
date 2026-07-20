export async function getShoes() {
    const url = "https://ecommerce-backend-ogas.onrender.com/api/shoes";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Couldnt fetch data");
        };

        const data = await response.json();
        return {
            shoes: data
        };

    } catch (error) {
        console.error("Error found at", error);

    }
}
