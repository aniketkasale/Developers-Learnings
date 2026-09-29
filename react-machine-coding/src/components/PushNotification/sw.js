// // sw.js
// self.addEventListener("install", () => {
//   console.log("Service Worker installed");
//   self.skipWaiting(); // It tells the browser to activate the new Service Worker immediately.
// });

// self.addEventListener("activate", () => {
//   console.log("Service Worker activated");
// });

// // This is where push notifications are received
// self.addEventListener("push", (event) => {
//   const data = event.data ? event.data.text() : "Hello from Push!";

//   event.waitUntil(
//     clients.openWindow("/notifications?newssId=${data.newsId}"), // open react route and react takes care from there
//     // is a Service Worker–provided API that represents all the browser windows/tabs controlled by that Service Worker.
//   );
// });

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  self.clients.claim();
});

self.addEventListener("push", (event) => {
  const data = event.data?.json() || {
    title: "New Message",
    body: "Hello from Push!",
  };

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
    }),
  );
});
