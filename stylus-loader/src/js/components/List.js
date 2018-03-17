import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const List = props => (
    <ul className="list">
        {
            props.data.map((item) => (
                <Item key={item.tw} {...item} />
            ))
        }
    </ul>
);

List.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
