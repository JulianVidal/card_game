import QrScanner from 'qr-scanner';
import qrcode from 'qrcode-generator';
import { Player } from './game';

let scanner: QrScanner;
export function readQrCode(callback: Function, videoElement: HTMLVideoElement) {

    if (!scanner) {
        scanner = new QrScanner(
            videoElement,
            ({ data }) => {
                scanner.stop();
                callback(JSON.parse(data));
            },
            {
                highlightScanRegion: true,
                onDecodeError: () => { }
            }
        );
    }

    scanner.start();
}

export function createQrCode(data: RTCSessionDescriptionInit) {
    const qr = qrcode(0, 'L' as ErrorCorrectionLevel);
    qr.addData(JSON.stringify(data));
    qr.make();
    const el = document.getElementById('qr');
    if (el) {
        el.style.display = "";
        el.innerHTML = qr.createSvgTag();
    } else {
        throw new Error("SVG container not found");
    }

}
