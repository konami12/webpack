import "../css/estilos.css";
import Saludo from "./saludo";
import Json from "../json/data.json";
Saludo.alerta("Jorge");
Json.agenda.forEach((contacto) => {
    Saludo.alerta(`${contacto.name} => edad: ${contacto.edad}\n`);
});