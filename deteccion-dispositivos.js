const d=document,
n=navigator,
na=n.userAgent

export default function userDeviceInfo(id){
    //console.log(na)
    const $id=d.getElementById(id)


    const isMobile = {
		// dispositivos andoriod
		// i-> no importa si esta en mayusaculas o minusculas
		android: () => navigator.userAgent.match(/android/i),
		ios: () => navigator.userAgent.match(/iphone|ipad|ipod/i),
		windows: () => navigator.userAgent.match(/windows phone/i),
		// si en userSgent encuentra algo que dice "android",esta en ese dispositivo
		any: function () {
			return this.android() || this.ios() || this.windows();
		},
	};
	const isDesktop = {
		linux: () => navigator.userAgent.match(/linux/i),
		mac: () => navigator.userAgent.match(/mac os/i),
		windows: () => navigator.userAgent.match(/windows nt/i),
		any: function () {
			return this.linux() || this.mac() || this.windows();
		},
	};
	const isBrowser = {
		chrome: () => navigator.userAgent.match(/chrome/i),
		safarai: () => navigator.userAgent.match(/safarai/i),
		firefox: () => navigator.userAgent.match(/firefox/i),
		opera: () => navigator.userAgent.match(/opera|opera mini/i),
		ie: () => navigator.userAgent.match(/msie|iemobile/i),
		edge: () => navigator.userAgent.match(/edge/i),
		any: function () {
			return (
				this.ie() ||
				this.edge() ||
				this.chrome() ||
				this.safarai() ||
				this.firefox() ||
				this.opera()
			);
		},
	};
    $id.innerHTML=`
    <ul>
    <li>User Agent=<b>${na}</b></li>
    <li>Plataforma=<b>${isMobile.any()?isMobile.any():isDesktop.any()}</b></li>
    <li>Navegador=<b>${isBrowser.any()}</b></li>
    </ul>
    `
    if (isBrowser.chrome()) {
		$id.innerHTML += `<p><mark>Este contenido es exclusivo de chrome</mark></p>`;
	}

    if (isBrowser.firefox()) {
		$id.innerHTML += `<p><mark>Este contenido es exclusivo de firefox</mark></p>`;
	}

    if (isBrowser.edge()) {
		$id.innerHTML += `<p><mark>Este contenido es exclusivo de edge</mark></p>`;
	}
}
