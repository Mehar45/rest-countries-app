import { useState } from "react";
import "../assets/css/select.css";

type SelectOption = {
  label: string;
  value: string | number;
}

type SelectProps = {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function Select({ options, value, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isOptionSelected = (option: string): boolean => option === value;

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
      className="custom-select"
      tabIndex={0}
    >
      <span className="value">{value}</span>
      <ul className={`options ${isOpen ? "show" : ""}`}>
        {options.map(option =>
          <li
            key={option.value}
            onClick={() => onChange(option.label)}
            className={`option ${isOptionSelected(option.label) ? "selected" : ""}`}>
            {option.label}
          </li>
        )}
      </ul>
    </div>
  )
}