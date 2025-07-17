import { motion } from "framer-motion";
import styles from "./WeddingColorSection.module.css";

const colors = [
  { hex: "#810000" },
  { hex: "#ffffff" },
  { hex: "#e8c9cd" },
  { hex: "#d4af37" },
  { hex: "#2c3e50" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WeddingColorSection() {
  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Наша весільна палітра
      </motion.h2>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {colors.map((color) => (
          <motion.div
            key={color.name}
            className={styles.card}
            variants={cardVariants}
            whileHover={{
              scale: [1, 1.05, 1.08],
              transition: {
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
          >
            <div
              className={styles.colorBlock}
              style={{ backgroundColor: color.hex }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
