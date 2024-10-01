import { useState } from "react";
import Cronometro from "../Cronometro";
import Formulario from "../Formulario";
import Lista from "../Lista";
import style from './App.module.scss'
import { ITarefa } from "../../types/tarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro/>
    </div>
  );
}

export default App;