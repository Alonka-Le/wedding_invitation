import css from "./Navigation.module.css";
function Navigation() {
  return (
    <nav className={css.container}>
      <a className={css.item} href="#invitation">
        Запрошення
      </a>
      <a className={css.item} href="#confirm">
        Підтвердити присутність
      </a>
      <a className={css.item} href="#questions">
        Питання
      </a>
    </nav>
  );
}
export default Navigation;
