const ndef = new NDEFReader();
let ignoreRead = false;

function read(data) {
    ignoreRead = true;
    return new Promise((resolve, reject) => {
        ndef.addEventListener(
            "reading",
            (event) => {
                console.log("reading");
            },
            { once: false },
        );
    });
}

const content = document.getElementById("content");
let count = 0;

async function runApplication() {
    while (true) {
        await ndef.scan();

        count++;

        content.textContent = `Scanned items = ${count}`;
        const sleepTimer = new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 500);
        });

        await sleepTimer;
    }
}

runApplication();