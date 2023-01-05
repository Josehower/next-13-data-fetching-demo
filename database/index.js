async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let queryCount = 1;

export async function getPageInfoFromDatabase() {
  // simulate a database query
  await wait(1000);
  console.log('Query No.', queryCount);
  queryCount++;

  return {
    title: 'this is my page title',
    description: 'this is my page description',
    data: 'This is coming from a query directly on the component',
  };
}
