import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getShoeById, getShoes } from "../services/services.js";

const ShoeContext = createContext(null);

export function ShoeProvider({ children }) {

    // ============================================
    // STATES & VARIABLES =========================
    // ============================================

    const [shoeData, setShoeData] = useState([]);
    const [likedShoes, setLikedShoes] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    // ============================================
    // EFFECTS & APIS =============================
    // ============================================

    // ALL SHOES =================================
    useEffect(() => {

        async function fetchData() {
            try {
                const data = await getShoes();
                setShoeData(data.shoes);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();

    }, []);

    // GET SHOE BY ID =============================

    // ============================================
    // FUNCTIONS ==================================
    // ============================================

    function increaseLike(shoeId) {
        const nowLiked = !likedShoes[shoeId];
        setLikedShoes(prev => ({ ...prev, [shoeId]: nowLiked }));
    }


    // value =====================================

    const value = {
        shoeData,
        setShoeData,
        likedShoes,
        isLoading,
        increaseLike
    }

    return (
        <ShoeContext value={value}>
            {children}
        </ShoeContext>
    )
}

export function UseShoe() {
    const context = useContext(ShoeContext);
    if (!context) throw new Error("UseShoe must be used in ShoeProvider");
    return context;
}