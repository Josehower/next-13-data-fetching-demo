import { getDataDirectlyOnComponent } from '../database/index';

export default async function Head() {
  const title = await getDataDirectlyOnComponent();
  const request = await fetch('http://localhost:3000/api/user');
  const description = await request.json();

  return (
    <>
      <title>{title.data}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={description.data} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
