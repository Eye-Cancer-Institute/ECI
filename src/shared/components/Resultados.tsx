import React from "react";

const Resultados = () => {
  return (
    <div className="resultados-div">
      <h2>
        Factor/Porcentaje de <span>riesgo</span>:
      </h2>
      <div className="bar">
        <div className="inside-bar">
          <p className="zero">0%</p>
          <p className="hundred">100%</p>
          <p className="percentage">66%</p>
        </div>
      </div>
      <p className="information-result">
        <span>Información general de resultados:</span> Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Quod, provident esse vero doloremque,
        autem ad dignissimos quaerat officia molestias praesentium deleniti
        ullam explicabo nisi dicta? Facere porro sunt aperiam quia.
      </p>
    </div>
  );
};

export default Resultados;
