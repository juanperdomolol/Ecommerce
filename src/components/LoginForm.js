import React from "react";
import Button from "./Button";

const LoginForm = ({
  isLogin,
  formData,
  errors,
  handleInputChange,
  handleSubmit,
  onClose,
}) => {
  const title = isLogin ? "Iniciar Sesión" : "Registrarse";
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
      {!isLogin && (
  <div className="flex flex-col">
    <label className="mb-2">Usuario:</label>
    <input
      type="text"
      name="username"
      value={formData.username}
      onChange={handleInputChange}
      className={`border ${
        errors.username ? "border-red-500" : "border-gray-300"
      } p-2 rounded focus:ring focus:ring-blue-300`}
    />
    {errors.username && (
      <p className="text-red-500 text-xs mt-1">{errors.username}</p>
    )}
  </div>
)}
<div className="flex flex-col">
  <label className="mb-2">Email:</label>
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleInputChange}
    className={`border ${
      errors.email ? "border-red-500" : "border-gray-300"
    } p-2 rounded focus:ring focus:ring-blue-300`}
  />
  {errors.email && (
    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
  )}
</div>

      <div className="flex flex-col">
        <label className="mb-2">Contraseña:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className={`border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } p-2 rounded focus:ring focus:ring-blue-300`}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password}</p>
        )}
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onClose}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Cerrar
        </button>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isLogin ? "Iniciar Sesión" : "Registrarse"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
