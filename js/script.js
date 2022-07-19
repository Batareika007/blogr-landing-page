const dropDownLink = document.querySelectorAll('.dropdown__inner');
const dropDownArrow = document.querySelectorAll('.dropdown__link img');
const dropDownContent = document.querySelectorAll('.dropdown__hiden-links');


dropDownLink.forEach((element) => {

    // console.log(element)
    //     let dropDown = element.querySelector('.header__nav-list');



    element.addEventListener('click', (e) => {
        // console.log(element);


        let arrow = e.target.querySelector('img');
        let content = e.target.querySelector('.dropdown__hiden-links');


        let closeContent = () => {
            element.classList.remove('active')
            gsap.to(arrow, {
                rotate: '0deg'
            })
            gsap.to(content, {
                height: 0,
                opacity: 0
            })
        }
        let openContent = () => {
            element.classList.add('active')
            gsap.to(arrow, {
                rotate: '180deg'
            })
            gsap.to(content, {
                height: 'auto',
                opacity: 1
            })
        }

        if (element.classList.contains('active')) {
            closeContent()
        } else {
            dropDownLink.forEach((element) => {
                console.log(element)
                element.classList.remove('active')
                gsap.to(dropDownArrow, {
                    rotate: '0deg'
                })
                gsap.to(dropDownContent, {
                    height: 0,
                    opacity: 0
                })
            });
            openContent()
        }
    })

    //         let imgArrow = e.target.querySelector('img')

    //         if (imgArrow.classList.contains('rotate')) {

    //             imgArrow.classList.remove('rotate');
    //             gsap.to(dropDown, {
    //                 height: 0,
    //                 opacity: 0,
    //                 duration: 0.3,
    //                 display: 'none'

    //             })
    //         } else {
    //             dropDownArrow.forEach(element => {
    //                 element.classList.remove('rotate');

    //                 gsap.to('.header__nav-list', {
    //                     height: 0,
    //                     opacity: 0,
    //                     duration: 0.3,
    //                     display: 'none'
    //                 })
    //             })
    //             imgArrow.classList.add('rotate');

    //             gsap.fromTo(dropDown, {
    //                 height: 0,
    //                 padding: 0,
    //                 display: 'none'
    //             }, {
    //                 padding: '16px',
    //                 height: 'auto',
    //                 opacity: 1,
    //                 display: 'inline-block'
    //             })
    //         }
    //     })
});