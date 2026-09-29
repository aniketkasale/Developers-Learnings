// Start the first n promises concurrently.
// Then resolve the remaining promises one-by-one sequentially.

async function executePromises(tasks, n) {
  const results = [];
  const firstBatch = tasks.slice(0, n);
  let firstResults = await Promise.all(firstBatch);
  firstResults = firstResults.map((result) => ({
    status: "fulfilled",
    value: result,
  }));
  results.push(...firstResults);

  for (let i = n; i < tasks.length; i++) {
    const result = await tasks[i]();
    results.push(result);
  }

  return results;
}

const createTask = (name, time) => () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(name);
      resolve(name);
    }, time);
  });

const tasks = [
  createTask("A", 1000),
  createTask("B", 1000),
  createTask("C", 1000),
  createTask("D", 1000),
  createTask("E", 500),
];

executePromises(tasks, 2).then((res) => console.log(res));
