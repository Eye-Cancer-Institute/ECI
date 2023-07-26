interface ResultadosProps {
  percentage: number;
}

const Resultados = ({ percentage }: ResultadosProps) => {
  return (
    <div className="resultados-div">
      <h2>
        Estimación de <span>riesgo</span> de crecimiento a 5 años:
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
      {percentage < 23 && (
        <p className="information-result">
          <span>Información general de resultados:</span> El resultado muestra
          que el paciente tiene un factor de riesgo bajo. Recomendamos repetir
          la revisión completa en 4 meses.
        </p>
      )}
      {percentage === 34 && (
        <p className="information-result">
          <span>Información general de resultados:</span> El resultado muestra
          que el paciente tiene un factor de riesgo medio. Recomendamos evaluar
          el referir al paciente con un especialista en oncología ocular para
          continuar con la valoración y el diagnóstico; o, realizar una segunda
          evaluación en 2 meses.
        </p>
      )}
      {percentage > 50 && (
        <p className="information-result">
          <span>Información general de resultados:</span> El resultado muestra
          que el paciente tiene un factor de riesgo alto. Recomendamos referir
          al paciente <span>inmediatamente</span> con un especialista en
          oncología ocular para continuar con la valoración y el diagnóstico.
        </p>
      )}

      <p className="fuente">
        {" "}
        <span>Fuente: </span> National Library of Medicine{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/30608349/">
          https://pubmed.ncbi.nlm.nih.gov/30608349/
        </a>
      </p>
    </div>
  );
};

export default Resultados;
