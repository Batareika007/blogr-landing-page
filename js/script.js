const dropDownMenu = document.querySelectorAll('.dropDown');
const dropDownArrow = document.querySelectorAll('.header__nav_heading img');
const headerNav = document.querySelector('.header__nav_heading');





dropDownMenu.forEach((element) => {
    // console.log(element.querySelector('.header__nav-list'))

    let dropDown = element.querySelector('.header__nav-list');
    element.addEventListener('click', function (e) {
        // console.log(e.target)

        let imgArrow = e.target.querySelector('img')

        if (imgArrow.classList.contains('rotate')) {

            imgArrow.classList.remove('rotate');
            gsap.to(dropDown, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                display: 'none'

            })
        } else {
            dropDownArrow.forEach(element => {
                element.classList.remove('rotate');

                gsap.to('.header__nav-list', {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    display: 'none'
                })
            })
            imgArrow.classList.add('rotate');

            gsap.fromTo(dropDown, {
                height: 0,
                padding: 0,
                display: 'none'
            }, {
                padding: '16px',
                height: 'auto',
                opacity: 1,
                display: 'inline-block'
            })
        }
    })
});