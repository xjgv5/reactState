import React, { useState } from "react";

export const PrimerEstado = () => {
  // let nombre = "Xavier Gómez"

  // const cambiarNombre = () => {
  //   nombre = "Juan Fernandez"
  // }

  const [nombre, setNombre] = useState("Xavier Gómez");

  const cambiarNombre = (e, nombreFijo) => {
    setNombre(nombreFijo);
  };

  return (
    <div>
      <h3>Componente : Primer estado</h3>
      <b> {nombre} </b>
      <button onClick={(e) => cambiarNombre(e, "Otro nombre")}>
        Cambiar por otro nombre
      </button>
      <br />
      <input
        onChange={(e) => cambiarNombre(e, e.target.value)}
        type="text"
        placeholder="Cambia el nombre"
      />
    </div>
  );
};
