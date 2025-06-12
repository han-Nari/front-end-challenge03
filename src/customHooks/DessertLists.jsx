import { useEffect, useState, useRef } from "react";

export default function DessertLists() {
  // Individiual Item
  const items = {
    waffle: {
      id: 1,
      name: "Waffle",
      price: 6.5,
      quantity: 0,
    },
    CrèmeBrûlée: {
      id: 2,
      name: "Vanilla Bean Crème Brûlée",
      price: 7.0,
      quantity: 0,
    },
    Macaron: {
      id: 3,
      name: "Macaron Mix of Five",
      price: 8.0,
      quantity: 0,
    },
    Tiramisu: {
      id: 4,
      name: "Classic Tiramisu",
      price: 5.5,
      quantity: 0,
    },
    Baklava: {
      id: 5,
      name: "Pistachio Baklava",
      price: 4.0,
      quantity: 0,
    },
    Pie: {
      id: 6,
      name: "Lemon Meringue Pie",
      price: 5.0,
      quantity: 0,
    },
    Cake: {
      id: 7,
      name: "Red Velvet Cake",
      price: 4.5,
      quantity: 0,
    },
    Brownie: {
      id: 8,
      name: "Salted Caramel Brownie",
      price: 4.5,
      quantity: 0,
    },
    PannaCotta: {
      id: 9,
      name: "Vanilla Panna Cotta",
      price: 6.5,
      quantity: 0,
    },
  };

  // Save Individual Item
  const [cart, setCart] = useState([]);

  // Get the save item
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem("orders");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Error", e);
      return [];
    }
  });

  const closeRef = useRef();
  const openRef = useRef();

  // Save Orders
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // Add To Cart
  function addCart(food) {
    const myFood = items[food];

    setCart((prevCart) => [...prevCart, myFood]);
  }

  // Increase Order
  function orderIncrement(index) {
    const incrementOrder = [...cart];
    incrementOrder[index].quantity += 1;
    setCart(incrementOrder);
  }

  // Reduce Order
  function orderDecrement(index) {
    const decrementOrder = [...cart];
    if (decrementOrder[index].quantity > 0) {
      decrementOrder[index].quantity -= 1;
      setCart(decrementOrder);
    }
  }

  // Total Order Price
  function totalOrderPrice() {
    return cart.reduce((total, item) => {
      return total + item.price + item.price * item.quantity;
    }, 0);
  }

  // Confirm Order
  function confirmOrder() {
    if (cart.length === 0) return;

    let newOrder = {
      item: cart,
      totalPrice: totalOrderPrice(),
    };

    if (openRef.current) {
      openRef.current.style.visibility = "visible";
    }

    setOrders((o) => [...o, newOrder]);
    setCart([]);
  }

  // Cancel Orders
  function cancelOrder(index) {
    const cancel = orders.filter((_, i) => i !== index);
    setOrders(cancel);
  }

  // Navigation Links
  const navLinks = ({ isActive }) => ({
    color: isActive ? "hsl(14, 86%, 42%)" : "black",
  });

  // Close button
  function closeButton() {
    if (openRef.current) {
      openRef.current.style.visibility = "hidden";
    }
  }

  return {
    items,
    cart,
    setCart,
    orders,
    setOrders,
    addCart,
    orderIncrement,
    orderDecrement,
    totalOrderPrice,
    confirmOrder,
    cancelOrder,
    navLinks,
    closeButton,
    openRef,
  };
}
