import { NavLink, Link } from "react-router-dom";
import DesserLists from "./customHooks/DessertLists";

// Desktop images
import waffleDesktop from "./assets/images/image-waffle-desktop.jpg";
import cremeBruleeDesktop from "./assets/images/image-creme-brulee-desktop.jpg";
import macaronDesktop from "./assets/images/image-macaron-desktop.jpg";
import tiramisuDesktop from "./assets/images/image-tiramisu-desktop.jpg";
import baklavaDesktop from "./assets/images/image-baklava-desktop.jpg";
import meringueDesktop from "./assets/images/image-meringue-desktop.jpg";
import cakeDesktop from "./assets/images/image-cake-desktop.jpg";
import brownieDesktop from "./assets/images/image-brownie-desktop.jpg";
import pannaCottaDesktop from "./assets/images/image-panna-cotta-desktop.jpg";

// Mobile images
import waffleMobile from "./assets/images/image-waffle-mobile.jpg";
import cremeBruleeMobile from "./assets/images/image-creme-brulee-mobile.jpg";
import macaronMobile from "./assets/images/image-macaron-mobile.jpg";
import tiramisuMobile from "./assets/images/image-tiramisu-mobile.jpg";
import baklavaMobile from "./assets/images/image-baklava-mobile.jpg";
import meringueMobile from "./assets/images/image-meringue-mobile.jpg";
import cakeMobile from "./assets/images/image-cake-mobile.jpg";
import brownieMobile from "./assets/images/image-brownie-mobile.jpg";
import pannaCottaMobile from "./assets/images/image-panna-cotta-mobile.jpg";

// Icon
import iconCart from "../src/assets/images/icon-add-to-cart.svg";
import check from "../src/assets/images/check.svg";
export default function Product() {
  const {
    items,
    cart,
    addCart,
    orderIncrement,
    orderDecrement,
    totalOrderPrice,
    confirmOrder,
    navLinks,
    closeButton,
    openRef,
  } = DesserLists();

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

      <main className="wrapper">
        <div className="wrapper-grid">
          <div>
            <h2>Desserts</h2>
            <div className="cards">
              {/* Image 1 */}
              <div className="card1">
                <div className="card-top">
                  <picture>
                    <source src={waffleMobile} media="(max-width: 500px)" />
                    <img src={waffleDesktop} alt="Waffle" />
                  </picture>
                  <button
                    onClick={() => addCart("waffle")}
                    className="btn"
                    type="button"
                    disabled={cart.some(
                      (item) => item.id === items["waffle"].id
                    )}
                  >
                    <img className="cart" src={iconCart} alt="cart" />
                    <span className="add">Add to Cart</span>
                  </button>
                </div>
                <div className="card-bottom">
                  <p className="opac">Waffle</p>
                  <h4>Waffle with Berries</h4>
                  <p className="rose">$6.50</p>
                </div>
              </div>

              {/* Image 2 */}
              <div className="card2">
                <div className="card-top">
                  <picture>
                    <source
                      src={cremeBruleeMobile}
                      media="(max-width: 500px)"
                    />
                    <img src={cremeBruleeDesktop} alt="Crème Brûlée" />
                  </picture>
                  <button
                    onClick={() => addCart("CrèmeBrûlée")}
                    className="btn"
                    type="button"
                    disabled={cart.some(
                      (item) => item.id === items["CrèmeBrûlée"].id
                    )}
                  >
                    <img className="cart" src={iconCart} alt="cart" />
                    <span className="add">Add to Cart</span>
                  </button>
                </div>
                <div className="card-bottom">
                  <p className="opac">Crème Brûlée</p>
                  <h4>Vanilla Bean Crème Brûlée</h4>
                  <p className="rose">$7.00</p>
                </div>
              </div>

              {/* Image 3 */}
              <div className="card3">
                <div className="card-top">
                  <picture>
                    <source src={macaronMobile} media="(max-width: 500px)" />
                    <img src={macaronDesktop} alt="Macaron" />
                  </picture>
                  <button
                    onClick={() => addCart("Macaron")}
                    className="btn"
                    type="button"
                    disabled={cart.some(
                      (item) => item.id === items["Macaron"].id
                    )}
                  >
                    <img className="cart" src={iconCart} alt="cart" />
                    <span className="add">Add to Cart</span>
                  </button>
                </div>
                <div className="card-bottom">
                  <p className="opac">Macaron</p>
                  <h4> Macaron Mix of Five</h4>
                  <p className="rose">$8.00</p>
                </div>
              </div>

              {/* Image 4 */}
              <div className="card5">
                <div className="card-top">
                  <picture>
                    <source src={tiramisuMobile} media="(max-width: 500px)" />
                    <img src={tiramisuDesktop} alt="Tiramisu" />
                  </picture>
                  <button
                    onClick={() => addCart("Tiramisu")}
                    className="btn"
                    type="button"
                    disabled={cart.some(
                      (item) => item.id === items["Tiramisu"].id
                    )}
                  >
                    <img className="cart" src={iconCart} alt="cart" />
                    <span className="add">Add to Cart</span>
                  </button>
                </div>
                <div className="card-bottom">
                  <p className="opac">Tiramisu</p>
                  <h4>Classic Tiramisu</h4>
                  <p className="rose">$5.50</p>
                </div>
              </div>

              {/* Image 5 */}
              <div className="card5">
                <div className="card-top">
                  <picture>
                    <source src={baklavaMobile} media="(max-width: 500px)" />
                    <img src={baklavaDesktop} alt="Baklava" />
                  </picture>
                  <button
                    onClick={() => addCart("Baklava")}
                    className="btn"
                    type="button"
                    disabled={cart.some(
                      (item) => item.id === items["Baklava"].id
                    )}
                  >
                    <img className="cart" src={iconCart} alt="cart" />
                    <span className="add">Add to Cart</span>
                  </button>
                </div>
                <div className="card-bottom">
                  <p className="opac">Baklava</p>
                  <h4>Pistachio Baklava</h4>
                  <p className="rose">$4.00</p>
                </div>
              </div>

              {/* Image 6 */}
              <div className="card6">
                <div className="card-top">
                  <picture>
                    <source src={meringueMobile} media="(max-width: 500px)" />
                    <img src={meringueDesktop} alt="Pie" />
                  </picture>
                  <button
                    onClick={() => addCart("Pie")}
                    className="btn"
                    type="button"
                    disabled={cart.some((item) => item.id === items["Pie"].id)}
                  >
                    <img className="cart" src={iconCart} alt="cart" />
                    <span className="add">Add to Cart</span>
                  </button>
                </div>
                <div className="card-bottom">
                  <p className="opac">Pie</p>
                  <h4>Lemon Meringue Pie</h4>
                  <p className="rose">$5.00</p>
                </div>
              </div>

              {/* Image 7 */}
              <div className="card7">
                <div className="card-top">
                  <picture>
                    <source src={cakeMobile} media="(max-width: 500px)" />
                    <img src={cakeDesktop} alt="Cake" />
                  </picture>
                  <button
                    onClick={() => addCart("Cake")}
                    className="btn"
                    type="button"
                    disabled={cart.some((item) => item.id === items["Cake"].id)}
                  >
                    <img className="cart" src={iconCart} alt="cart" />
                    <span className="add">Add to Cart</span>
                  </button>
                </div>
                <div className="card-bottom">
                  <p className="opac">Cake</p>
                  <h4>Red Velvet Cake</h4>
                  <p className="rose">$4.50</p>
                </div>
              </div>

              {/* Image 8 */}
              <div className="card8">
                <div className="card-top">
                  <picture>
                    <source src={brownieMobile} media="(max-width: 500px)" />
                    <img src={brownieDesktop} alt="Brownie" />
                  </picture>
                  <button
                    onClick={() => addCart("Brownie")}
                    className="btn"
                    type="button"
                    disabled={cart.some(
                      (item) => item.id === items["Brownie"].id
                    )}
                  >
                    <img
                      className="cart"
                      src="../src/assets/images/icon-add-to-cart.svg"
                      alt="cart"
                    />
                    <span className="add">Add to Cart</span>
                  </button>
                </div>
                <div className="card-bottom">
                  <p className="opac">Brownie</p>
                  <h4>Salted Caramel Brownie</h4>
                  <p className="rose">$4.50</p>
                </div>
              </div>

              {/* Image 9 */}
              <div className="card9">
                <div className="card-top">
                  <picture>
                    <source src={pannaCottaMobile} media="(max-width: 500px)" />
                    <img src={pannaCottaDesktop} alt="Panna Cotta" />
                  </picture>
                  <button
                    onClick={() => addCart("PannaCotta")}
                    className="btn"
                    type="button"
                    disabled={cart.some(
                      (item) => item.id === items["PannaCotta"].id
                    )}
                  >
                    <img className="cart" src={iconCart} alt="cart" />
                    <span className="add">Add to Cart</span>
                  </button>
                </div>
                <div className="card-bottom">
                  <p className="opac">Panna Cotta</p>
                  <h4>Vanilla Panna Cotta</h4>
                  <p className="rose">$6.50</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-carts">
              <h3>Your Cart ({cart.length})</h3>
              {cart.length > 0 ? (
                <ul>
                  {cart.map((item, index) => (
                    <li key={index}>
                      <div className="food-name">
                        <h4>{item.name}</h4>
                        <p className="price">
                          Total Order: $
                          {item.price + item.price * item.quantity}
                        </p>
                      </div>
                      <div className="order-flex">
                        <button onClick={() => orderDecrement(index)}>-</button>
                        <span>{item.quantity + 1}</span>
                        <button onClick={() => orderIncrement(index)}>+</button>
                      </div>
                    </li>
                  ))}
                  <span className="total-price">
                    <span className="price">Total Price:</span>
                    <span>${totalOrderPrice()}</span>
                  </span>
                  <button onClick={confirmOrder} className="btn">
                    Confirm your Order
                  </button>
                </ul>
              ) : (
                <div className="card-cart">
                  <img
                    src="../src/assets/images/illustration-empty-cart.svg"
                    alt=""
                  />
                  <p>Your added items will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <section ref={openRef} className="order-success">
        <div className="orders">
          <button onClick={closeButton} className="btn">
            X
          </button>
          <div className="success">
            <img className="check" src={check} alt="check" />
            <h3>Order Confirmed!</h3>
            <p>We hope you enjoy your food!</p>
          </div>
          <Link to="/orders">Check your orders</Link>
        </div>
      </section>
    </>
  );
}
