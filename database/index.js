async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let fromQueryCount = 1;

export async function getDataDirectlyOnComponent() {
  // simulate a database query
  await wait(1000);
  console.log('getDataDirectlyOnComponent', fromQueryCount);
  fromQueryCount++;

  return {
    title: 'this is my page title',
    description: 'this is my page description',
    data: 'This is coming from a query directly on the component',
  };
}
