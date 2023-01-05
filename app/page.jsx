import { getDataDirectlyOnComponent } from '../database';
import styles from './page.module.css';

export default async function Home() {
  const title = await getDataDirectlyOnComponent();
  const request = await fetch('http://localhost:3000/api/user');
  const description = await request.json();

  return (
    <main className={styles.main}>
      <div>
        <h1>{title.data}</h1>
        <hr />
        <h2>{description.data}</h2>
      </div>
    </main>
  );
}
