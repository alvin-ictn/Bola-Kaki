function registerService(){
	if (!('serviceWorker' in navigator)) {
      console.log("Service worker tidak didukung browser ini.");
    } else {
      	window.addEventListener('load',() => {
			return navigator.serviceWorker.register('service-worker.js')
			.then(function (registration) {
				console.log('Registrasi service worker berhasil.');
				return registration;
			})
			.then(registration => {
				console.log(registration);
				notifikasi(registration);
			})
			.catch(function (err) {
				console.error('Registrasi service worker gagal.', err);
			});
		})
    }
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

function notifikasi(reg) {
	if ("Notification" in window) {
		Notification.requestPermission()
		.then(result => {
			if (result === "denied") {
					console.log("Pengguna tidak menginginkan Notifikasi");
				return;
			} else if (result === "default") {
				console.error("Kotak dialog ditutup");
				return;
			}

			if ('PushManager' in window) {
				reg.pushManager.subscribe({
					userVisibleOnly: true,
					applicationServerKey: urlBase64ToUint8Array('BFJ2emNaRSLchNFpiF4OFvOiTif9zALm3ZHZBXQCXBEAAf_g8DuPQhVv_sezheayblKtFYeohed7q0LBzlNYxmc')
				})
				.then(subs => {
					console.log('Berhasil melakukan subscribe dengan');
					console.log('endpoint: ', subs.endpoint);
					console.log('p256dh key: ', btoa(String.fromCharCode.apply(null, new Uint8Array(subs.getKey('p256dh')))));
					console.log('auth key: ', btoa(String.fromCharCode.apply(null, new Uint8Array(subs.getKey('auth')))));
				})
				.catch(err => {
					console.error('Gagal melakukan subscribe ', err.message);
				});
			}
		});
	} else {
		console.error("Browser tidak mendukung fitur notifikasi.");
	}
}

export default registerService;