import { getDataDirectlyOnComponent } from '../database/index';

export default async function Head() {
  const pageInfo = await getDataDirectlyOnComponent();

  return (
    <>
      <title>{pageInfo.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={pageInfo.description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
