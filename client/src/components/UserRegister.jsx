import { useForm } from "react-hook-form";

function UserRegister() {
  const { register, handleSubmit } = useForm();
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <form onSubmit={handleSubmit(values => {
            console.log(values);
          })}>
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Registro de usuario
            </h2>

            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Nombre de usuario
              </label>
              <input
                type="text"
                {...register("userName", { required: true })}
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
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
            <button>
              <a
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Ingresar
              </a>
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Olvidaste tu contraseña?
            </p>
            <p className="text-xs text-gray-500 mt-3"
            href="http://localhost:5173">
              HOME
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default UserRegister;
