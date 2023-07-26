interface ResultadosProps {
  percentage: number;
}

const Resultados = ({ percentage }: ResultadosProps) => {
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
            width: `${percentage !== 1 ? percentage : 2.5}%`,
            transition: "all 1s",
          }}
          className={`inside-bar ${percentage !== 1 ? "bg-primary" : ""}`}
        >
          <div className="inside-inside-bar"></div>
          <div
            className={`flecha-percentage ${
              percentage === 1 ? "right-0" : "right-[-6px]"
            }`}
          >
            <img src="/images/flecha.png" alt="flecha" />
            <p className="percentage">{percentage}%</p>
          </div>
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
