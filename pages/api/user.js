import { getDataFromFetch } from '../../database';

export default async function handler(req, res) {
  const data = await getDataFromFetch();
  res.status(200).json(data);
}
