import React from "react";
import "./Checkbox.styles.scss";

interface CheckboxProps {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

function Checkbox({ isChecked, setIsChecked }: CheckboxProps) {
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`custom-checkbox ${isChecked ? "checked" : ""}`}
      onClick={handleCheckboxChange}
    >
      <div className={`checkbox-inner ${isChecked ? "checked" : ""}`}></div>
    </div>
  );
}

export default Checkbox;
