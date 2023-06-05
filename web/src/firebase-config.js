/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyC44nBe_8Gkzu5NU1y245l0VXPmnUptes4",
  authDomain: "friendlychat-7c161.firebaseapp.com",
  projectId: "friendlychat-7c161",
  storageBucket: "friendlychat-7c161.appspot.com",
  messagingSenderId: "928663677863",
  appId: "1:928663677863:web:15c0cd45e9eb408aaee482",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
