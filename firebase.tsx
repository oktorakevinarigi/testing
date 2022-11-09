import "firebase/messaging";
import { initializeApp, getApps } from "firebase/app";
import {getToken, getMessaging} from "firebase/messaging";
// import localforage from "localforage";

const firebaseCloudMessaging = {
  init: async () => {
    if (getApps().length === 0) {

      // Initialize the Firebase app with the credentials
      initializeApp({
        apiKey: "AIzaSyBBJ6AUuGfIawmlVw7bSdfONw0JHSmNBZo",
        authDomain: "explore-b5f5e.firebaseapp.com",
        projectId: "explore-b5f5e",
        storageBucket: "explore-b5f5e.appspot.com",
        messagingSenderId: "226667732266",
        appId: "1:226667732266:web:11d618f97dc1084ce5d253",
      });

      try {
        const messaging = getMessaging();
        // const tokenInLocalForage = await localforage.getItem("fcm_token");

         // Return the token if it is alredy in our local storage
        // if (tokenInLocalForage !== null) {
        //   return tokenInLocalForage;
        // }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
        // Get new token from Firebase
          const fcm_token = await getToken(messaging, {
            vapidKey: "BGtsO0ymr4_euIUdcjcuTE3uGylm2EZfRbz81YECf0ftJDLaGM8ChFfX4cHDC3xd_ejxlUe__duISXf-UTXBIj8",
          });

          // Set token in our local storage
          if (fcm_token) {
            // localforage.setItem("fcm_token", fcm_token);
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};
export { firebaseCloudMessaging };