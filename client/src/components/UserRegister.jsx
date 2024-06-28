import React, { useState } from "react";
import { useForm } from "react-hook-form";

function UserRegister() {
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (values) => {
    try {
      const response = await fetch('http://localhost:3002/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: values.userName,
          email: values.email,
          password: values.password
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data); // Puedes manejar la respuesta de la API aquí

      // Mostrar mensaje de éxito y limpiar el formulario
      setMessage("Usuario creado con éxito");
      reset();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Registro de usuario
            </h2>

            {message && (
              <div className="mb-4 text-green-500">
                {message}
              </div>
            )}

            <div className="relative mb-4">
              <label
                htmlFor="userName"
                className="leading-7 text-sm text-gray-600"
              >
                Nombre de usuario
              </label>
              <input
                type="text"
                {...register("userName", { required: true })}
                id="userName"
                name="userName"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Contraseña
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Ingresar
            </button>
             </form>
        </div>
      </div>
    </section>
  );
}

export default UserRegister;
