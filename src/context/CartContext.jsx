import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

function findIndex(array, item) {
    return array.filter(elem => elem !== item)
}

export function CartProvider({ children }) {

    // ==================================================
    // STATES & VARIABLES ===============================
    // ==================================================

    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false)

    // ==================================================
    // FUNCTIONS ========================================
    // ==================================================

    function getQuantity(shoe) {
        const exists = cart.find(item => item.id === shoe.id);
        
        return exists ? exists.quantity : 0
    }

    function addToCart(shoe) {
        increaseQuantity(shoe);
    }
    function removeFromCart(shoe) {
        const data = {
            id: shoe.id
        }
        setCart(prev => {
            const existing = prev.find(item => item.id === data.id);
            if (!existing) return [];
            return prev.filter(item => item.id !== data.id);
        });
    }
    function increaseQuantity(shoe) {

        setCart(prev => {
            const exists = prev.find(item => item.id === shoe.id);
            if (!exists) {

                return [...prev,
                {
                    ...shoe,
                    quantity: 1
                }]
            }

            if (exists && exists.quantity === 100) {
                return prev;
            } else {
                return prev.map(item => item.id === shoe.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                )
            }

        })

    }
    function decreaseQuantity(shoe) {
        setCart(prev => {
            const exists = prev.find(item => item.id === shoe.id);
            if (!exists) return prev;

            if (exists.quantity === 1) {
                return prev.filter(item => item.id !== shoe.id);
            }
            return prev.map(item =>
                item.id === shoe.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        })
    }
    function clearCart() {
        setCart([])
    }
    function toggleCart() {
        setShowCart(prev => !prev)
    }

    const value = {
        cart,
        showCart,
        setShowCart,
        addToCart,
        removeFromCart,
        getQuantity,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        toggleCart
    }

    return (
        <CartContext value={value}>
            {children}
        </CartContext>
    )
}

export function useCart() {

    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}