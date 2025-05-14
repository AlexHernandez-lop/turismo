import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 pt-12">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex max-w-5xl w-full translate-y-[2rem]">
        {/* Imagen del lado izquierdo */}
        <div className="w-1/2 hidden md:block">
          <img
            src="/turismo/img/login.jpg"
            alt="Login visual"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Formulario del lado derecho */}
        <div className="w-full md:w-1/2 p-8 relative">
          <div className="text-right text-sm mb-4">
            Aún no eres miembro?{" "}
            <Link to="/register" className="text-red-600 font-medium hover:underline">
              Regístrate
            </Link>
          </div>

          <h2 className="text-2xl font-bold mb-1">Inicia Sesion</h2>
          <p className="mb-6 text-gray-600">Explora lo que te rodea</p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nombre de usuario"
              className="border border-red-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-red-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <div className="text-right text-sm">
              <Link to="/recover" className="text-gray-600 hover:underline">
                Recuperar contraseña
              </Link>
            </div>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg"
            >
              Iniciar Sesión
            </button>
          </form>

          <div className="text-center mt-6 text-sm text-gray-500">O continua con</div>

          <div className="flex justify-center gap-4 mt-4">
            <img src="/facebook-icon.png" alt="Facebook" className="w-8 h-8 cursor-pointer" />
            <img src="/google-icon.png" alt="Google" className="w-8 h-8 cursor-pointer" />
            <img src="/apple-icon.png" alt="Apple" className="w-8 h-8 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
