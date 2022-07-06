//rafce
import React from "react";
import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarid = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validando form
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay almenos un campo vacio");
      setError(true);
      return;
    }

    setError(false);

    //objeto de paciente
    const objPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      //Editando Registro
      objPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      //Nuevo Registro
      objPaciente.id = generarid();
      setPacientes([...pacientes, objPaciente]);
    }

    //Reiniciando campos form

    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5"
      >
        {error && (
          <Error>
            {" "}
            <h1>Atención</h1>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mb-10">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>

          <input
            type="text"
            id="mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          ></input>
        </div>
        <div className="mb-10">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>

          <input
            type="text"
            id="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          ></input>
        </div>
        <div className="mb-10">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>

          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          ></input>
        </div>
        <div className="mb-10">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>

          <input
            type="date"
            id="alta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          ></input>
        </div>
        <div className="mb-10">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            placeholder="Describe Sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <input
          type="submit"
          id="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
                hover:bg-indigo-700 cursor-pointer transition-transform rounded-2xl"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        ></input>
      </form>
    </div>
  );
};

export default Formulario;
