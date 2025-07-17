import css from "./Hero.module.css";
import Marquee from "react-fast-marquee";

function Hero() {
  return (
    <header className={css.hero} id="invitation">
      <div className={css.titleText}>
        <p className={css.invitationOne}>Запрошення на весілля</p>
        <h1 className={css.title}>Ілля та Альона</h1>
        <p className={css.invitationOne}>Запоріжжя, 16.08.2025</p>
      </div>
      <Marquee className={css.titleNiceWords}>
        <p className={css.invitationOne}>
          Будемо раді відсвяткувати наш <br className={css.br} /> важливий день
          разом із Вами.
        </p>
      </Marquee>
    </header>
  );
}
export default Hero;
