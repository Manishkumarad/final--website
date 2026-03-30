import styles from "../crm-solutions.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>deodha</div>

      <div className={styles.links}>
        <Link href="/digital-engineering">Digital Engineering</Link>
        <Link href="/ai-automation">AI Automation</Link>
        <Link href="/crm-solutions">CRM</Link>
        <Link href="/case-studies">Case Studies</Link>
      </div>

      <Link href="/book-demo" className={styles.primary}>Book Demo</Link>
    </nav>
  );
}
