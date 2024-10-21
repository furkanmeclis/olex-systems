
const firebaseConfig = {
    apiKey: "AIzaSyDngyK-w3S7yGmtQa4EXWLaLfCJEqpUyVU",
    authDomain: "olex-6bc47.firebaseapp.com",
    projectId: "olex-6bc47",
    storageBucket: "olex-6bc47.appspot.com",
    messagingSenderId: "852045853347",
    appId: "1:852045853347:web:ce59c95ea0d90bd10a4516",
    measurementId: "G-YSVP4EMESL"
};
if ('Notification' in window) {
    firebase.initializeApp(firebaseConfig);
    const messaging = firebase.messaging();
    messaging.onMessage((payload) => {
        console.log('Message received. ', payload);
        const notificationTitle = payload.notification.title;
        const notificationOptions = {
            body: payload.notification.body,
            icon: payload.data.icon,
            data: {
                url: payload.data.url // URL verisini buraya ekledik
            }
        };

        // Tarayıcı bildirimlerini destekliyorsa göster
        if (Notification.permission === 'granted') {
            const notification = new Notification(notificationTitle, notificationOptions);

            // Bildirime tıklanıldığında yapılacak aksiyon
            notification.onclick = function(event) {
                event.preventDefault(); // Varsayılan tıklama davranışını engelle
                if (notificationOptions.data.url) {
                    window.open(notificationOptions.data.url, '_blank'); // URL'ye yönlendir
                }
            };
        }
    });
}
