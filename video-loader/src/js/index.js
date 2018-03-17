import "../css/estilos.css";
import Saludo from "./saludo";
import video from "../video/video.mp4";
Saludo.alerta("Jorge");

const VIDEO = document.createElement("video");
VIDEO.setAttribute("src", video);
VIDEO.setAttribute("width", 450);
VIDEO.setAttribute("autoplay", true);
VIDEO.setAttribute("controls", true);
document.body.append(VIDEO);

console.log("soy un archivo externo");