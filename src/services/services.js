export async function getShoes() {
    const url = "http://localhost:5000/api/shoes";

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