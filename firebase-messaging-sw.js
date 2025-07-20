importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD2si9OGF9frCj2agwBltcCwtm2qWzQrKo",
  authDomain: "notification-fe3d3.firebaseapp.com",
  projectId: "notification-fe3d3",
  storageBucket: "notification-fe3d3.firebasestorage.app",
  messagingSenderId: "268120039765",
  appId: "1:268120039765:web:7866eef2c294d5e5524fdc",
  measurementId: "G-RW5BH1Z47M"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log('[firebase-messaging-sw.js] Received background message:', payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon || "https://firebase.google.com/favicon.ico"
  });
});
