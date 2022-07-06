const Paciente = ({ elementos, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = elementos;

  const Eliminar = () => {
    const respuesta = confirm("Estas seguro que deseas eliminar ?");

    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="mx-3 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Nombre : {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Propietario : {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        E-mail : {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Fecha Alta : {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Sintomas : {""}
        <span className="font-normal normal-case"> {sintomas}</span>
      </p>
      <div className="mt-5">
        <button
          type="button"
          className="bg-indigo-700 text-white py-2 px-10 rounded-md"
          onClick={() => setPaciente(elementos)}
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-red-700 text-white py-2 px-10 ml-4 rounded-md"
          onClick={Eliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
