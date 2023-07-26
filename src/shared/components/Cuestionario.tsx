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
            <th>Argumento</th>
            <th>Argumento</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr id="tr1">
            <td>Argumento 1</td>
            <td>Argumento 1</td>
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
            <td>Argumento 2</td>
            <td>Argumento 2</td>
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
            <td>Argumento 3</td>
            <td>Argumento 3</td>
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
            <td>Argumento 4</td>
            <td>Argumento 4</td>
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
            <td>Argumento 5</td>
            <td>Argumento 5</td>
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
            <td>Argumento 6</td>
            <td>Argumento 6</td>
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
