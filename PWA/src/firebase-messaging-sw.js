importScripts('https://www.gstatic.com/firebasejs/5.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.8.1/firebase-messaging.js');
var config = {
    apiKey: "AIzaSyDNJ2Ky_h6qfGxq7AYxjzI4bbaCcoLW9xM",
    authDomain: "pwa-first-c0a9e.firebaseapp.com",
    databaseURL: "https://pwa-first-c0a9e.firebaseio.com",
    projectId: "pwa-first-c0a9e",
    storageBucket: "pwa-first-c0a9e.appspot.com",
    messagingSenderId: "442406614374"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {

    const title = 'Welcome to my PWA Projects !';

    const options = {
        body: payload.data.body
    };

    return self.registration.showNotification(title, options);
});