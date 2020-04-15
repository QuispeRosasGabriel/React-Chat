import React, { Component } from "react";
import opciones from "../../constants/constants";

import Header from "../../styledComponents/Header";
import Lista from "../../styledComponents/Lista";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  render() {
    return (
      <div>
        <Header>
          <div>
            <Lista>
              {opciones.map((opcion, index) => {
                return (
                  <span key={opcion + index}>
                    <i className={opcion.icon}></i> {opcion.nombre}
                  </span>
                );
              })}
            </Lista>
          </div>
        </Header>
      </div>
    );
  }
}

export default Menu;
