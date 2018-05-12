import React from "react";
import PropTypes from "prop-types";
const Item = (props) => (
    <li>
        <label>nombre: {props.name}</label>
        <label>edad: {props.edad}</label>
        <a href={`https://twitter.com/${props.tw}`}>{props.tw}</a>
    </li>
);

Item.propTypes = {
    name: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    tw: PropTypes.string.isRequired,
}

export default Item;