document.onload = function () {
    var isMobile :boolean = /iPhone|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        document.querySelector<HTMLMetaElement>('meta[name=viewport]')!.content = 'width=device-width, initial-scale=0.5';
    }
}