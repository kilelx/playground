const sections = document.querySelectorAll(".sct--scroll");

let options = {
    threshold: 0.5
}

const displayRadius = (entries) => {

    entries.forEach(entry => {
        if(entry.isIntersecting) {
            console.log(scrollY);
            entry.target.style.borderRadius = `${1-(scrollY*0.1)}rem 1rem 0 0;`;
        }
    })
}

const osberver = new IntersectionObserver(displayRadius, options);


sections.forEach(section => {
    osberver.observe(section);
})

// clientY : hauteur de la souris lors d'un évènement