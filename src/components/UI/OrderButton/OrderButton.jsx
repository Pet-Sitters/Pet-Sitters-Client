import s from './OrderButton.module.scss';
export function OrderButton({ textButton, style, ...props }) {
  return (
    <button className={s.button} style={style} {...props}>
      {textButton}
    </button>
  );
}
