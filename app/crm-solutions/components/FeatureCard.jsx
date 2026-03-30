import styles from "../crm-solutions.module.css";

export default function FeatureCard({ title }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>Built for performance and scalable growth.</p>
    </div>
  );
}
