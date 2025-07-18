// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/12.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD2si9OGF9frCj2agwBltcCwtm2qWzQrKo",
  authDomain: "notification-fe3d3.firebaseapp.com",
  projectId: "notification-fe3d3",
  storageBucket: "notification-fe3d3.appspot.com",
  messagingSenderId: "268120039765",
  appId: "1:268120039765:web:7866eef2c294d5e5524fdc"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body, icon } = payload.notification;
  self.registration.showNotification(title, { body, icon });
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
