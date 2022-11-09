importScripts(
    "https://www.gstatic.com/firebasejs/9.9.3/firebase-app-compat.js"
  );
  importScripts(
    "https://www.gstatic.com/firebasejs/9.9.3/firebase-messaging-compat.js"
  );

firebase.initializeApp({
  apiKey: "AIzaSyBBJ6AUuGfIawmlVw7bSdfONw0JHSmNBZo",
  authDomain: "explore-b5f5e.firebaseapp.com",
  projectId: "explore-b5f5e",
  storageBucket: "explore-b5f5e.appspot.com",
  messagingSenderId: "226667732266",
  appId: "1:226667732266:web:11d618f97dc1084ce5d253",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png",
    badge: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
