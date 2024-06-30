import React from 'react';

const CheckoutButton = ({ title, price }) => {

  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:9000/create_preference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, price }),
      });
      const data = await response.json();
      
      if (data.id) {
        const mp = new window.MercadoPago('TU_PUBLIC_KEY', {
          locale: 'es-AR',
        });

        mp.checkout({
          preference: {
            id: data.id,
          },
          autoOpen: true,
        });
      }
    } catch (error) {
      console.error('Error al iniciar el checkout:', error);
    }
  };

  return (
    <button onClick={handleCheckout} className="btn btn-primary">
      Pagar con Mercado Pago
    </button>
  );
};

export default CheckoutButton;
