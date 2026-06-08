// Example JavaScript code for embedded video
const streamSelect = document.querySelector("#streamSelect");

if (streamSelect) {
    streamSelect.addEventListener("change", function () {
        const value = this.value;
        console.log(value);

        if (value === "check") {
            setTimeout(() => {
                document.getElementById("video1")?.style.setProperty("width", "50%", "important");
                document.getElementById("video2")?.style.setProperty("width", "50%", "important");
                document.getElementById("video3")?.style.setProperty("width", "100%", "important");
            }, 1000);
        } else {
            setTimeout(() => {
                ["video1", "video2", "video3"].forEach(id => {
                    document.getElementById(id)?.style.setProperty("width", "100%", "important");
                });
            }, 1000);
        }
    });
}
