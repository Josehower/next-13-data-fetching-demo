async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let fromQueryCount = 1;

export async function getDataDirectlyOnComponent() {
  // simulate a database query
  await wait(1000);
  console.log('getDataDirectlyOnComponent', fromQueryCount);
  fromQueryCount++;

  return { data: 'This is coming from a query directly on the component' };
}

let fromFetchCount = 1;

export async function getDataFromFetch() {
  // simulate a database query
  await wait(1000);
  console.log('getDataFromFetch', fromFetchCount);
  fromFetchCount++;

  return { data: 'This is coming from a api route' };
}
