import React, { useContext } from 'react';
import ShoppingCartContext from './ShoppingCartContext'; // Asegúrate de importar el contexto

const ShoppingCart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(ShoppingCartContext); // Usa el contexto

  return (
    <div className="container my-5">
      <div className="row">
        <main className="col-sm-8">
          {/* Puedes generar elementos a partir de un JSON aquí */}
        </main>
        <aside className="col-sm-4">
          <h2>Carrito</h2>
          {cartItems.length === 0 ? (
            <p className="alert alert-info">Tu carrito está vacío</p>
          ) : (
            <ul className="list-group mb-3">
              {cartItems.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="my-0">{item.name}</h6>
                    <small className="text-muted">${item.price}</small>
                  </div>
                  <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(index)}>
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          )}
          {cartItems.length > 0 && (
            <>
              <hr />
              <p className="text-right">
                Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
              </p>
              <button className="btn btn-danger w-100" onClick={clearCart}>
                Vaciar
              </button>
            </>
          )}
        </aside>
      </div>
    </div>
  );
};

export default ShoppingCart;
