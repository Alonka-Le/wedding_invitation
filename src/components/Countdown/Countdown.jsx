import { useEffect, useState } from "react";
import css from "./Countdown.module.css";

function Countdown() {
  const targetDate = new Date("2025-08-16T11:00:00");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
      isOver: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={css.countdown}>
      {timeLeft.isOver ? (
        <h2>Цей день настав!</h2>
      ) : (
        <>
          <h2>До весілля:</h2>
          <div className={css.timeBox}>
            <span>{timeLeft.days}дн.</span>
            <span>{timeLeft.hours}год.</span>
            <span>{timeLeft.minutes}хв.</span>
            <span>{timeLeft.seconds}сек.</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Countdown;
