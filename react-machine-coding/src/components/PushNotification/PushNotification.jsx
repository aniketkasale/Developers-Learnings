import { useEffect } from "react";

export default function PushNotification() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => console.log("SW registered"));
    }
  }, []);

  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    console.log("Permission:", permission);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Service Worker Push Demo</h2>
      <button onClick={requestPermission}>Enable Notifications</button>
    </div>
  );
}
