import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../Layouts/Layouts";

function LoginPage() {
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (values) => {
    try {
      const response = await fetch('https://1901-2800-300-6f52-abf0-d7e-2d8e-d0f7-9b0f.ngrok-free.app/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': '69420'
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password
        })
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Usuario no registrado');
      }

      const data = await response.json();
      setMessage("Inicio de sesión exitoso");
      setError(""); // Limpiar mensaje de error si había alguno
      reset(); // Limpiar el formulario
      // Aquí podrías guardar el token en el almacenamiento local o el estado de la aplicación
      // localStorage.setItem('token', data.token);
    } catch (error) {
      setError(error.message); // Capturar y mostrar el mensaje de error
    }
  };

  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                Inicio de Sesión
              </h2>

              {message && (
                <div className="mb-4 text-green-500">
                  {message}
                </div>
              )}

              {error && (
                <div className="mb-4 text-red-500">
                  {error}
                </div>
              )}

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

              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default LoginPage;
