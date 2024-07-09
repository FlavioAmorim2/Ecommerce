import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import CartProducts from "./CartProducts";

const CartOverlay = () => {
  const { isCartOpen, toggleCartOpen } = useContext(CartContext);

  return (
    <div
      className={`h-screen w-screen fixed top-0 left-0 flex z-50 ease-in-out duration-200 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
      <section
        id='outside-of-cart'
        onClick={toggleCartOpen}
        className='w-3/4 bg-slate-950 opacity-50'></section>
      <section
        id='cart'
        className='w-1/4 bg-slate-950 min-w-96 border-l-4 border-slate-400 p-5 flex flex-col justify-between text-white'>
        <div className='flex justify-between content-center border-b border-slate-200 pb-1'>
          <p>Minha Sacola</p>
          <button onClick={toggleCartOpen}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
        <CartProducts />
      </section>
    </div>
  );
};

export default CartOverlay;
