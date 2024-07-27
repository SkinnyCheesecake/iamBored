document.addEventListener('DOMContentLoaded', function() {
    fadein();
})
 
const fadein = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('shown');
        }
        else{
            entry.target.classList.remove('shown');
        }
    })
})

const hidden = document.querySelectorAll('.hidden');
hidden.forEach((el) => fadein.observe(el))


