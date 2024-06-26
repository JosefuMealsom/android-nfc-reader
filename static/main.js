const content = document.getElementById("read-button");

content.addEventListener("click", triggerRead);

function triggerRead() {

    const ndef = new NDEFReader();
    let ignoreRead = false;

    ndef.addEventListener(
        "reading",
        (event) => {
            const paragraph = document.createElement("p");
            paragraph.textContent = "Scanned an Item!";
            content.appendChild(paragraph);
        },
    );

    const content = document.getElementById("content");

    async function runApplication() {
        let count = 0;
        while (true) {
            await ndef.scan();

            count++;
        }
    }

    runApplication();
}