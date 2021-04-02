// Hooking on service worker registration life cycle
// Plugin should only be loaded on client-side:
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const worker of registrations) {
      console.log("Service worker:", worker);
    }
  });
}
