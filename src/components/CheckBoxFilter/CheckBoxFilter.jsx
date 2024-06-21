import { useState } from 'react';
import s from './CheckBoxFilter.module.scss';

export function ImageCheckbox({ imageSrc, label }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={s.checkboxWrapper}>
      <input
        type='checkbox'
        id={label}
        checked={checked}
        onChange={handleCheckboxChange}
        className={s.checkbox}
        
      />
      <label htmlFor={label} className={`${s.label} ${checked ? s.checked : ''}`}>
        <img src={imageSrc} alt={label} className={s.image} />
      </label>
    </div>
  );
}
