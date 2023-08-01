interface ResultadosProps {
  percentage: number;
}

const Resultados = ({ percentage }: ResultadosProps) => {
  return (
    <div className="resultados-div">
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
            className={`flecha-percentage  ${
              percentage === 1 ? "right-0" : "right-[-6px]"
            } ${percentage === 100 ? "right-[6px]" : ""}`}
          >
            <img src="/images/flecha.png" alt="flecha" />
            {percentage !== 100 ? (
              <p className="percentage">{percentage}%</p>
            ) : (
              <div className="alto-riesgo">
                <p>Alto</p>
                <p>Riesgo</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {percentage < 23 && (
        <p className="information-result">
          El resultado muestra que el paciente tiene un factor de{" "}
          <span>riesgo bajo</span>. Recomendamos repetir la revisión completa en{" "}
          <span>4 meses</span>.
        </p>
      )}
      {percentage === 34 && (
        <p className="information-result">
          El resultado muestra que el paciente tiene un factor de{" "}
          <span>riesgo medio</span>. Recomendamos <span>evaluar</span> el
          referir al paciente con un{" "}
          <span>especialista en oncología ocular</span> para continuar con la
          valoración y el diagnóstico; o, realizar una segunda evaluación en{" "}
          <span>2 meses</span>.
        </p>
      )}
      {percentage > 50 && (
        <p className="information-result">
          El resultado muestra que el paciente tiene un factor de{" "}
          <span>riesgo alto</span>. Recomendamos referir al paciente{" "}
          <span>inmediatamente</span> con un
          <span> especialista en oncología ocular</span> para continuar con la
          valoración y el diagnóstico.
        </p>
      )}
      <div className="button-referir-div">
        <p>
          Para referir directamente al paciente con el especialista en oncología
          ocular, haga clic <a href="https://wa.me/528128608714">aquí</a>.
        </p>
      </div>

      <p className="fuente">
        {" "}
        <span>Fuente: </span> Shields, C. L., Dalvin, L. A., Ancona-Lezama, D.,
        Yu, M. D., Di Nicola, M., Williams, B. K., Jr, Lucio-Alvarez, J. A.,
        Ang, S. M., Maloney, S., Welch, R. J., & Shields, J. A. (2019).
        CHOROIDAL NEVUS IMAGING FEATURES IN 3,806 CASES AND RISK FACTORS FOR
        TRANSFORMATION INTO MELANOMA IN 2,355 CASES: The 2020 Taylor R. Smith
        and Victor T. Curtin Lecture. Retina (Philadelphia, Pa.), 39(10),
        1840–1851.{" "}
        <a href="https://doi.org/10.1097/IAE.0000000000002440">
          https://doi.org/10.1097/IAE.0000000000002440
        </a>
      </p>
    </div>
  );
};

export default Resultados;
