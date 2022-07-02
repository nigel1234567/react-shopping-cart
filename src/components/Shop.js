import React, { useState, useEffect } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { NotificationManager, NotificationContainer } from 'react-notifications';

import ShoppingCart from "./ShoppingCart";
import Products from "./Products";

const Shop = () => {
    const [cartContents, setCartContents] = useState(checkLocalStorage());
    const [itemWasDeleted, setItemWasDeleted] = useState(false);
    const [isSticky, setIsSticky] = useStateIfMounted(false);

    // Effect when scroll
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", () => handleScroll);
        };
    });

    // Store cart contents in local storage
    useEffect(() => {
        localStorage.setItem("cartContents", JSON.stringify(cartContents))
    }, [cartContents]);

    // Get cart contents from local storage
    function checkLocalStorage() {
        return (
            JSON.parse(localStorage.getItem('cartContents')) || []
        )
    }

    // Set sticky when scrolling
    function handleScroll() {
        if (window.scrollY > 107) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    }

    // Add to cart
    function addToCart(item) {
        // Notify success in adding cart
        NotificationManager.success(`${item.name} added to cart.`);
        // Add item into cart array
        setCartContents((prevCartContents) => [...prevCartContents, item])
    }

    // Delete from cart
    function deleteItem(item) {
        NotificationManager.error(`${item.name} removed from cart.`)
        setCartContents(cartContents.filter((product) => product.itemId !== item.itemId))
        setItemWasDeleted(true);
    }

    const match = useLocation();
    const allCategories = [
        "logia",
        "zoan",
        "paramecia",
    ];

    return (
        <div className="content">
            <h1 className="shop-title">Devil Fruit Shop</h1>
            <nav className={`navbar shop-nav ${isSticky && "sticky"}`}>
                <div className="navbar-menu">
                    <NavLink
                    to='.'
                    className="navbar-item"
                    >
                        All Products
                    </NavLink>
                    {allCategories.map((category, index) => {
                        return (
                            <NavLink
                                key={index}
                                to={`./c/${category}`}
                                className="navbar-item"
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </NavLink>
                        );
                    })}
                </div>
            </nav>
            <ShoppingCart
                contents={cartContents}
                className={"navbar-item"}
                deleteItem={deleteItem}
                itemWasDeleted={itemWasDeleted}
                isSticky={isSticky}
            />
            <NotificationContainer/>
            <Routes>
                    {allCategories.map((category, index) => {
                        return (
                            <Route path={`/c/${category}`} 
                                key={index} 
                                element={<Products category={category} addToCart={addToCart} />}
                            >
                            </Route>
                        );
                    })}
                    <Route path='/'
                        element={<Products category={"all"} addToCart={addToCart} />}
                    >
                    </Route>
            </Routes>
        </div>
    )
}

export default Shop