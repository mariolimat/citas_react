import Paciente from "./Paciente";
const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  let { tith2, parrafo, spam } = "";

  if (pacientes.length > 0) {
    tith2 = "Listado Pacientes";
    parrafo = `Administra tus ${""}`;
    spam = "Pacientes y Citas";
  } else {
    tith2 = "No Hay Pacientes";
    parrafo = `Comienza agregando pacientes ${""}`;
    spam = "y aparecerán en este lugar";
  }

  const listapacientes = pacientes.map((elementos) => {
    const { id } = elementos;
    return (
      <Paciente
        key={id}
        elementos={elementos}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
      />
    );
  });

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">{tith2}</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        {parrafo}
        <span className="text-indigo-600 font-bold">{spam}</span>
      </p>

      {listapacientes}
    </div>
  );
};

export default ListadoPacientes;
