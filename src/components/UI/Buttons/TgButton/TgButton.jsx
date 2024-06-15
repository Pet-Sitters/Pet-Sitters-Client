import s from './ThButton.module.scss';
export function TgButton() {
  return (
    <a
      href='https://t.me/petsitter_online'
      target='_blank'
      rel='noopener noreferrer'
      className={s.social}>
      <img className={s.social_link} src={'/assets/icons/Home/tg.png'} alt='telegram' />
      <p className={s.social_title}>Написать в Telegram</p>
    </a>
  );
}
