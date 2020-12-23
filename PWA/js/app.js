// if ('serviceWorker' in navigator) {
//    var x= navigator.serviceWorker
//         .register('./service-worker.js')
//         .then(function() { console.log('Service Worker Registered'); });
//     console.log(x);
// }
if ('serviceWorker' in navigator) {
       navigator.serviceWorker
        .register('./service-worker.js')
        .then(function() { console.log('Service Worker Registered'); });
    
}

// CODELAB: Register service worker.
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//       navigator.serviceWorker.register('/service-worker.js')
//           .then((reg) => {
//             console.log('Service worker registered.', reg);
//           });
//     });
//   }