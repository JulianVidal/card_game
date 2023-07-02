import QrScanner from 'qr-scanner';
import qrcode from 'qrcode-generator';

export function readQrCode(callback: Function, videoElement: HTMLVideoElement) {
    videoElement.style.display = "";

    const qrScanner = new QrScanner(
        videoElement,
        ({data}) => {
            videoElement.style.display = "none";
            callback(qrScanner, JSON.parse(data));
        },
        { highlightScanRegion: true,
        onDecodeError: () => {}}
    );
    qrScanner.start();
}

export function createQrCode(data: RTCSessionDescriptionInit) {
    const qr = qrcode(0, 'L' as ErrorCorrectionLevel);
    qr.addData(JSON.stringify(data));
    qr.make();
    const el = document.getElementById('qr');
    if (el) {
        el.innerHTML = qr.createSvgTag();
    } else {
        throw new Error("SVG container not found");
    }

}
