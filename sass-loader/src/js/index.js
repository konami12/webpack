import React from "react";
import { render } from "react-dom";
import Json from "../json/data.json";
import List from "./components/List";
import "../css/estilos.css";
import "../css/list.scss";

const COMPONET = <List key="list-01" data={Json.agenda} />;
const CONTAINER = document.querySelector("#Agenda");

render(COMPONET, CONTAINER);