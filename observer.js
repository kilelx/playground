const sections = document.querySelectorAll(".sct--scroll");

let options = {
    threshold: 0.5
}

const displayRadius = (entries) => {
    console.log(entries);
}

const osberver = new IntersectionObserver(displayRadius, options);


sections.forEach(section => {
    osberver.observe(section)
})