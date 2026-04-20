importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBc-gHRicMQuv10CBSCZB2eOfQqshftCVo",
  authDomain: "purchase-tracker-b43b1.firebaseapp.com",
  projectId: "purchase-tracker-b43b1",
  storageBucket: "purchase-tracker-b43b1.firebasestorage.app",
  messagingSenderId: "8022145425",
  appId: "1:8022145425:web:b027a3658b0ad8468b0230"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title || 'CF Purchase Tracker', {
    body: body || 'Nueva solicitud de compra',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [200, 100, 200],
    data: payload.data
  });
});
