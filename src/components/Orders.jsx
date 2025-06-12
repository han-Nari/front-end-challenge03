import { NavLink } from "react-router-dom";
import DesserLists from "../customHooks/DessertLists";

export default function Orders() {
  const { orders, cancelOrder, navLinks } = DesserLists();
  return (
    <>
      <header className="wrapper">
        <NavLink style={navLinks} to="/">
          Home
        </NavLink>
        <NavLink style={navLinks} to="/orders">
          Orders
        </NavLink>
      </header>

      <main className="wrapper table-center">
        <table>
          <thead>
            <tr>
              <th>Order No.</th>
              <th>Items</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-bottom no">
                <td data-cell="Order No. " className="text-center">
                  {index + 1}
                </td>
                <td>
                  <table>
                    <tbody>
                      {order.item.map((food, i) => (
                        <tr className="tr-flex" key={i}>
                          <td className="td-items">{food.name}</td>
                          <td className="td-bold">x {food.quantity + 1}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
                <td className="text-center td-items">${order.totalPrice}</td>
                <td className="text-center">
                  <button className="btn" onClick={() => cancelOrder(index)}>
                    Cancel Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
