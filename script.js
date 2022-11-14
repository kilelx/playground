const title = document.querySelector("section h1");

window.addEventListener("scroll", () => {
    title.style.transform = `translate(-50%, -${50+(scrollY)*0.1}%)`
})