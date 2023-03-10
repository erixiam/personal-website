let timer = 0;
window.addEventListener('load', (event) =>{
    let intersectionobserver = new IntersectionObserver(entries =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                setTimeout(function() {entry.target.classList.add('titlez'); }, timer);
                timer +=50;
                intersectionobserver.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.animate').forEach(obj =>{
        intersectionobserver.observe(obj);
    });
})