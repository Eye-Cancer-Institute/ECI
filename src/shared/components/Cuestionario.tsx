import { useEffect, useState } from "react";
import Checkbox from "./reusable/CustomCheckbox/Checkbox";
import Resultados from "./Resultados";

const Cuestionario = () => {
  const [checkboxStates, setCheckboxStates] = useState<{
    [key: string]: boolean;
  }>({
    tr1: false,
    tr2: false,
    tr3: false,
    tr4: false,
    tr5: false,
    tr6: false,
  });

  // Calculate the percentage based on checkboxStates
  const calculatePercentage = () => {
    const trueValuesCount = Object.values(checkboxStates).reduce(
      (count, value) => (value ? count + 1 : count),
      0
    );

    if (trueValuesCount === 0) {
      return 1;
    } else if (trueValuesCount === 1) {
      return 11;
    } else if (trueValuesCount === 2) {
      return 22;
    } else if (trueValuesCount === 3) {
      return 34;
    } else if (trueValuesCount === 4) {
      return 51;
    } else if (trueValuesCount === 5) {
      return 55;
    } else if (trueValuesCount === 6) {
      return 100;
    } else {
      // Handle other cases if needed
      return 1;
    }
  };

  const [percentage, setPercentage] = useState<number>(calculatePercentage());

  const handleCheckboxChange = (
    checkboxId: string,
    currentValue: boolean,
    isNoCheckbox: boolean
  ) => {
    if ((isNoCheckbox && !currentValue) || (!isNoCheckbox && currentValue)) {
      return;
    }

    setCheckboxStates((prevState) => ({
      ...prevState,
      [checkboxId]: !currentValue,
    }));
  };

  // Update the percentage whenever checkboxStates changes
  useEffect(() => {
    const calculatedPercentage = calculatePercentage();
    setPercentage(calculatedPercentage);
  }, [checkboxStates]);

  return (
    <div className="cuestionario-div">
      <table>
        <thead>
          <tr className="head-row">
            <th>Características</th>
            <th>Observaciones</th>
            <th>Resultados</th>
          </tr>
        </thead>
        <tbody>
          <tr id="tr1">
            <td>
              <span>T</span> (Thickness/Grosor)
            </td>
            <td>
              Observe el <span>ultrasonido.</span> ¿Observa usted un grosor
              mayor a 2mm?
            </td>
            <td className="checkboxes-td">
              <label
                className="si-label"
                onClick={() =>
                  handleCheckboxChange("tr1", checkboxStates["tr1"], false)
                }
              >
                Sí
              </label>
              <Checkbox
                isChecked={checkboxStates["tr1"]}
                setIsChecked={() =>
                  handleCheckboxChange("tr1", checkboxStates["tr1"], false)
                }
              />
              <label
                className="no-label"
                onClick={() =>
                  handleCheckboxChange("tr1", checkboxStates["tr1"], true)
                }
              >
                No
              </label>
              <Checkbox
                isChecked={!checkboxStates["tr1"]}
                setIsChecked={() =>
                  handleCheckboxChange("tr1", checkboxStates["tr1"], true)
                }
              />
            </td>
          </tr>
          <tr id="tr2">
            <td>
              <span>F</span> (Fluid/Presencia de líquido)
            </td>
            <td>
              Observe el <span>OCT</span> macular y sobre la lesión. ¿Observa
              líquido subretiniano o desprendimiento seroso de retina?
            </td>
            <td className="checkboxes-td">
              <label
                className="si-label"
                onClick={() =>
                  handleCheckboxChange("tr2", checkboxStates["tr2"], false)
                }
              >
                Sí
              </label>
              <Checkbox
                isChecked={checkboxStates["tr2"]}
                setIsChecked={() =>
                  handleCheckboxChange("tr2", checkboxStates["tr2"], false)
                }
              />
              <label
                className="no-label"
                onClick={() =>
                  handleCheckboxChange("tr2", checkboxStates["tr2"], true)
                }
              >
                No
              </label>
              <Checkbox
                isChecked={!checkboxStates["tr2"]}
                setIsChecked={() =>
                  handleCheckboxChange("tr2", checkboxStates["tr2"], true)
                }
              />
            </td>
          </tr>
          <tr id="tr3">
            <td>
              <span>S</span> (Symptoms/Síntomas)
            </td>
            <td>
              Use la <span>Cartilla de Snellen.</span> ¿Su paciente tiene una
              visión de 20/60 o peor? ¿Presenta metamorfopsias?
            </td>
            <td className="checkboxes-td">
              <label
                className="si-label"
                onClick={() =>
                  handleCheckboxChange("tr3", checkboxStates["tr3"], false)
                }
              >
                Sí
              </label>
              <Checkbox
                isChecked={checkboxStates["tr3"]}
                setIsChecked={() =>
                  handleCheckboxChange("tr3", checkboxStates["tr3"], false)
                }
              />
              <label
                className="no-label"
                onClick={() =>
                  handleCheckboxChange("tr3", checkboxStates["tr3"], true)
                }
              >
                No
              </label>
              <Checkbox
                isChecked={!checkboxStates["tr3"]}
                setIsChecked={() =>
                  handleCheckboxChange("tr3", checkboxStates["tr3"], true)
                }
              />
            </td>
          </tr>
          <tr id="tr4">
            <td>
              <span>O</span> (Orange pigment/Pigmento naranja)
            </td>
            <td>
              Observe la <span>autofluorescencia.</span> ¿Observa usted moteado
              hiper-autofluorescente?
            </td>
            <td className="checkboxes-td">
              <label
                className="si-label"
                onClick={() =>
                  handleCheckboxChange("tr4", checkboxStates["tr4"], false)
                }
              >
                Sí
              </label>
              <Checkbox
                isChecked={checkboxStates["tr4"]}
                setIsChecked={() =>
                  handleCheckboxChange("tr4", checkboxStates["tr4"], false)
                }
              />
              <label
                className="no-label"
                onClick={() =>
                  handleCheckboxChange("tr4", checkboxStates["tr4"], true)
                }
              >
                No
              </label>
              <Checkbox
                isChecked={!checkboxStates["tr4"]}
                setIsChecked={() =>
                  handleCheckboxChange("tr4", checkboxStates["tr4"], true)
                }
              />
            </td>
          </tr>
          <tr id="tr5">
            <td>
              <span>M</span> (Melanoma hollow/Hipoecogenicidad)
            </td>
            <td>
              Observe el <span>ultrasonido.</span> ¿La lesión tiene un centro
              hipo-ecogénico?
            </td>
            <td className="checkboxes-td">
              <label
                className="si-label"
                onClick={() =>
                  handleCheckboxChange("tr5", checkboxStates["tr5"], false)
                }
              >
                Sí
              </label>
              <Checkbox
                isChecked={checkboxStates["tr5"]}
                setIsChecked={() =>
                  handleCheckboxChange("tr5", checkboxStates["tr5"], false)
                }
              />
              <label
                className="no-label"
                onClick={() =>
                  handleCheckboxChange("tr5", checkboxStates["tr5"], true)
                }
              >
                No
              </label>
              <Checkbox
                isChecked={!checkboxStates["tr5"]}
                setIsChecked={() =>
                  handleCheckboxChange("tr5", checkboxStates["tr5"], true)
                }
              />
            </td>
          </tr>
          <tr id="tr6">
            <td>
              <span>DiM</span> (Diameter/Diámetro)
            </td>
            <td>
              Observe la <span>fotografía de fondo de ojo.</span> ¿La lesión
              mide más de 2 diámetros de disco o 5mm?
            </td>
            <td className="checkboxes-td">
              <label
                className="si-label"
                onClick={() =>
                  handleCheckboxChange("tr6", checkboxStates["tr6"], false)
                }
              >
                Sí
              </label>
              <Checkbox
                isChecked={checkboxStates["tr6"]}
                setIsChecked={() =>
                  handleCheckboxChange("tr6", checkboxStates["tr6"], false)
                }
              />
              <label
                className="no-label"
                onClick={() =>
                  handleCheckboxChange("tr6", checkboxStates["tr6"], true)
                }
              >
                No
              </label>
              <Checkbox
                isChecked={!checkboxStates["tr6"]}
                setIsChecked={() =>
                  handleCheckboxChange("tr6", checkboxStates["tr6"], true)
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
      <Resultados percentage={percentage} />
    </div>
  );
};

export default Cuestionario;
