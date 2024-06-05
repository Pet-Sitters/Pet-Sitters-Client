import s from './OrderButton.module.scss'
export function OrderButton({ textButton }) {
	return <button className={s.button}>{textButton}</button>
}
