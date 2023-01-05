import { getPageInfoFromDatabase } from '../database/index';

export default async function Head() {
  const pageInfo = await getPageInfoFromDatabase();

  return (
    <>
      <title>{pageInfo.title}</title>
      <meta name="description" content={pageInfo.description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
