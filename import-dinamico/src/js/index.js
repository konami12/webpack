import React from "react";
import { render } from "react-dom";
import Json from "../json/data.json";
import List from "./components/List";
import "../css/estilos.css";

const button = document.querySelector("#Load");

button.addEventListener("click", async () => {
    // Tengo que agregar la transforacion para que babel tome el import
    const { default: ALERTA } = await import("./alerta.js");
    ALERTA();
});


const COMPONET = <List key="list-01" data={Json.agenda} />;
const CONTAINER = document.querySelector("#Agenda");

render(COMPONET, CONTAINER);