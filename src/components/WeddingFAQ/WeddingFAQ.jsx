import React, { useState } from "react";
import css from "./WeddingFAQ.module.css";

const faqs = [
  {
    question: "Коли і де відбудеться весілля?",
    answer:
      "Спершу ми розділимо з вами особливу мить — урочисту церемонію розпису, яка відбудеться в Олександрівському РАЦСі за адресою: м. Запоріжжя, вул. Архівна, 2.         Після цього запрошуємо вас на  вінчання, яке пройде в церкві 'Віфлєєм' на вул. І.Виговського, 119. Ми будемо щасливі, якщо ви розділите з нами ці щирі й пам’ятні миті 💞",
  },
  {
    question: "Що вдягнути?",
    answer: "Дрес-код: святковий. Кольори представлені нижче.",
  },
  {
    question: "Чи можна прийти з дітьми?",
    answer: "Так, звичайно!",
  },
  {
    question: "Що подарувати?",
    answer:
      "Ваша присутність — найкращий подарунок. Якщо ж бажаєте — ми будемо вдячні за конверт ❤️",
  },
];

const WeddingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={css.container} id="questions">
      <h2 className={css.title}>Поширені питання</h2>
      <div className={css.list}>
        {faqs.map((faq, index) => (
          <div key={index} className={css.item}>
            <button className={css.question} onClick={() => toggle(index)}>
              {faq.question}
              <span className={css.icon}>
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className={css.answer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingFAQ;
