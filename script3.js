document.addEventListener("DOMContentLoaded", () => {

    const hoverWords = ["coffee", "not", "first"];
    const sentenceParts = document.querySelectorAll(".sentence");
    const body = document.body;

    hoverWords.forEach(id => {
        const word = document.getElementById(id);
        if (word) {
            word.addEventListener("mouseenter", () => {
                body.classList.add("hover-effect");
                sentenceParts.forEach(part => part.classList.add("hovered"));
            });

            word.addEventListener("mouseleave", () => {
                body.classList.remove("hover-effect");
                sentenceParts.forEach(part => part.classList.remove("hovered"));
            });
        }

    });
    
});
