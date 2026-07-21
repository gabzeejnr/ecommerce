import { createContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    <CartContext.Provider>
        {children}
    </CartContext.Provider>
}