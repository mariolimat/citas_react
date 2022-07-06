import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  // Carga desde el localstorage
  useEffect(() => {
    const obtenerLS = () => {
      //CONVIERTE STRING PACIENTES -> ARREGLO
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLS);
    };
    obtenerLS();
  }, []);

  // En localstorage solo puedes guardar string
  useEffect(() => {
    //CONVIERTE ARREGLO PACIENTES A STRING
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const objpacelim = pacientes.filter((pacien) => pacien.id !== id);
    console.log(objpacelim);
    setPacientes(objpacelim);
    //setPaciente(objpacelim);
  };

  return (
    <div className="container mx-auto mt-10">
      <Header
      //tomavalor = {tomavalor}
      />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
