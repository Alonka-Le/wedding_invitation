import { Gift, CreditCard, ShoppingCart } from "lucide-react";
import styles from "./GiftList.module.css";

export default function GiftList() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        <Gift className="w-6 h-6" /> Подарунки та побажання
      </h2>

      <p className={styles.description}>
        Ваша присутність – найкращий подарунок! 🎉 Але якщо ви все ж таки хочете
        нас порадувати, ось кілька варіантів:
      </p>

      <ul className={styles.list}>
        <li className={styles.item}>
          <div>
            <p className={styles.itemTitle}>Банківський переказ</p>
            <p className={styles.itemText}>ПриватБанк: Монобанк:</p>
          </div>
          <CreditCard className="w-5 h-5 text-gray-500" />
        </li>

        <li className={styles.item}>
          <div>
            <p className={styles.itemTitle}>ЮMoney / ЮKassa</p>
            <p className={styles.itemText}>yoomoney.ru/to/yourname</p>
          </div>
          <CreditCard className="w-5 h-5 text-gray-500" />
        </li>

        <li className={styles.item}>
          <div>
            <p className={styles.itemTitle}>Список бажань</p>
            <a
              href="https://www.ozon.ru/wishlist/yourwishlistid"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Посмотреть
            </a>
          </div>
          <ShoppingCart className="w-5 h-5 text-gray-500" />
        </li>
      </ul>
    </section>
  );
}
