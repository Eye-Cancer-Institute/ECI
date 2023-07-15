import { SetStateAction, useState } from "react";

const Resultados = () => {
  const [percentage, setPercentage] = useState<number>(0);

  const handlePercentageChange = (newPercentage: SetStateAction<number>) => {
    setPercentage(newPercentage);
  };

  return (
    <div className="resultados-div">
      <h2>
        Factor/Porcentaje de <span>riesgo</span>:
      </h2>
      <div className="bar">
        <p className="zero">0%</p>
        <p className="hundred">100%</p>
        <div
          style={{
            width: `${percentage !== 0 ? percentage : 2}%`,
            transition: "width 1.5s",
          }}
          className={`inside-bar ${percentage !== 0 ? "bg-primary" : ""}`}
        >
          <div
            className={`flecha-percentage ${
              percentage === 0 ? "left-[-6px]" : "right-[-6px]"
            }`}
          >
            <img src="/images/flecha.png" alt="flecha" />
            <p className="percentage">{percentage}%</p>
          </div>
        </div>
      </div>
      <button
        className="reservar-button"
        onClick={() => handlePercentageChange(88)}
      >
        Change Width
      </button>
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
