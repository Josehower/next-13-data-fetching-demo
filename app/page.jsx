import { getPageInfoFromDatabase } from '../database/index';

export default async function Home() {
  // Database query No. 2
  const pageInfo = await getPageInfoFromDatabase();

  return (
    <main>
      <h1>{pageInfo.title}</h1>
      <p>{pageInfo.data} </p>
    </main>
  );
}
