const drawingModal = document.getElementById("drawing-modal");
const bigImage = document.getElementById("drawing-big");

function openDrawing(img) {
    bigImage.src = img.src;
    bigImage.alt = img.alt;
    drawingModal.showModal();
    drawingModal.focus();
}

document.querySelectorAll(".drawing").forEach(img => {
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    img.addEventListener("click", () => openDrawing(img));
    img.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openDrawing(img);
        }
    });
});

document.getElementById("drawing-close").addEventListener("click", () => drawingModal.close());

drawingModal.addEventListener("click", event => {
    if (event.target === drawingModal) drawingModal.close();
});