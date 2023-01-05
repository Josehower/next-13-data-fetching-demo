import { getDataDirectlyOnComponent } from '../database';
import styles from './page.module.css';

export default async function Home() {
  const pageInfo = await getDataDirectlyOnComponent();

  return (
    <main className={styles.main}>
      <div>
        <h1>{pageInfo.title}</h1>
        <hr />
        <h2>{pageInfo.data}</h2>
      </div>
    </main>
  );
}
