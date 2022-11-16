const body = document.querySelector('body');

const title = document.querySelector("section h1");

window.addEventListener("scroll", () => {
    title.style.transform = `translate(-50%, -${50+(scrollY)*0.15}%)`
})

window.addEventListener("click", (e) => {
    console.log('clientX', e.clientY);
    console.log('pageY', e.pageY);
    console.log('screenY', e.screenY);
    console.log('offsetY', e.offsetY);
});