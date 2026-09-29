// ### **Uber | Machine Coding: Asynchronous Task Runner (Concurrency Limit)**

// **Question:** Imagine Uber is fetching data for 100 nearby drivers.
// To avoid hitting API rate limits or crashing the browser with too many simultaneous requests,
// you must implement a "Batch Runner."

// Write a function `promiseAllWithConcurrencyLimit` that takes an array of "task functions"
// (functions that return a promise) and a limit `limit`.
// It should execute no more than `limit` tasks at any given time.
// As soon as one task finishes, the next one in the queue should start.

// **Snippet & Input Data:**

// JavaScript

// ```jsx
// /**
//  * @param {Array<() => Promise<any>>} tasks - Array of functions returning promises
//  * @param {number} limit - Maximum concurrent executions
//  */
// async function promiseAllWithConcurrencyLimit(tasks, limit) {
//   // TODO: Your implementation
// }

// // --- Input Data for Testing ---
// const createDriverTask = (id, delay) => () =>
//   new Promise((resolve) => {
//     console.log(` Fetching Driver ${id}...`);
//     setTimeout(() => {
//       console.log(` Driver ${id} loaded`);
//       resolve(`Data for Driver ${id}`);
//     }, delay);
//   });

// const tasks =;

// // If limit is 2, Task 1 and 2 start.
// // When Task 2 finishes at 0.5s, Task 3 starts immediately.
// promiseAllWithConcurrencyLimit(tasks, 2).then(results => {
//   console.log("All tasks completed:", results);
// });
// ```

// **Interviewer Logic:** They are looking for **Queue Management**.
// You cannot simply use `Promise.all` because that starts everything at once.
// You must manage a "running pool" and a "pointer" to the next task in the array.

// Approach:
// 1. Maintain `running` count of currently executing tasks.
// 2. Maintain `index` pointer to the next task to start.
// 3. When task finishes, decrement `running` and start the next task if available.
// 4. Use `results` array to store the resolved values in the correct order.
// 5. Return a promise that resolves when all tasks are completed or rejects on the first error.

/**
 * @param {Array<() => Promise<any>>} tasks - Array of functions returning promises
 * @param {number} limit - Maximum concurrent executions
 */

async function promiseAllWithConcurrencyLimit(tasks, limit) {
  if (tasks.length === 0) {
    return Promise.resolve([]);
  }

  const results = new Array(tasks.length);
  let running = 0;
  let index = 0;

  return new Promise((resolve, reject) => {
    const executeTask = async () => {
      if (index >= tasks.length) {
        if (running == 0) {
          resolve(results);
        }
        return;
      }

      const currentTaskIndex = index;
      const task = tasks[currentTaskIndex];
      index++;
      running++;

      try {
        const res = await task();
        results[currentTaskIndex] = res;
      } catch (error) {
        results[currentTaskIndex] = {
          status: "rejected",
          reason: error,
        };
      } finally {
        running--;
        executeTask();
      }
    };

    const initialTasks = Math.min(limit, tasks.length);

    for (let i = 0; i < initialTasks; i++) {
      executeTask();
    }
  });
}

// --- Input Data for Testing ---

const createDriverTask = (id, delay) => () =>
  new Promise((resolve) => {
    console.log(` Fetching Driver ${id}...`);
    setTimeout(() => {
      console.log(` Driver ${id} loaded`);
      resolve(`Data for Driver ${id}`);
    }, delay);
  });

const tasks = [
  createDriverTask(1, 1000),
  createDriverTask(2, 500),
  createDriverTask(3, 1500),
];

// If limit is 2, Task 1 and 2 start.
// When Task 2 finishes at 0.5s, Task 3 starts immediately.
promiseAllWithConcurrencyLimit(tasks, 2).then((results) => {
  console.log("All tasks completed:", results);
});
