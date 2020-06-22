 const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
    span.classList.add('animated', 'rubberBand')
}))

spans.forEach(span => span.addEventListener('mouseout', function(e) {
    span.classList.remove('animated', 'rubberBand')
}))




const showRequiredCategory = event => {
    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for (i = 0; i < links.length; i++) {
        if (links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }
    event.classList.add('active')
    const getcategory = document.querySelector(`.category-$(getId)`)
    const categories = document.querySelectorAll('div[class^="category-"]')

    for (let i = 0; i < categories.length; i++) {
        if (categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }
    getcategory.classList.remove('hideCategory')
    getcategory.classList.add('showCategory')
}