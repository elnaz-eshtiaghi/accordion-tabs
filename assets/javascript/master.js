let _ul = document.querySelectorAll('.acc>li>ul')
        let _li = document.querySelectorAll('.acc>li>h4')
        let l = document.querySelectorAll('.acc>li')
        // .....ul->height.....

        _ul.forEach((val) => {
            let hul = val.clientHeight
            val.setAttribute('ulheight', hul)
            val.style.height = 0
        })

        _li.forEach((val, n) => {
            

            val.addEventListener('click', (e) => {
                
                // ....title & content.....

                let marketing = document.getElementsByClassName('marketing')
                let creative = document.getElementsByClassName('creative')
                let branding = document.getElementsByClassName('branding')

                //  .....title reset....

                document.getElementById('title').style.opacity = '0'
                let _h2 = document.querySelectorAll('h2')
                _h2.forEach((head2) => {
                    head2.classList.remove('anime')
                })

                // .....content reset.....

                document.getElementById('content').style.opacity = '0'
                let _div = document.querySelectorAll('.row>div')
                _div.forEach((d) => {
                    d.classList.remove('anime')
                })

                // .....title & content select.....

                let _dt = val.getAttribute('data-name')
                let sec = document.getElementsByTagName('section')
                switch (_dt) {
                    case 'marketing': marketing[0].classList.add('anime')
                        marketing[1].classList.add('anime')
                        sec[0].style.backgroundColor = '#40948A'
                        sec[1].style.backgroundColor = '#4BADA2'
                        document.getElementsByTagName('nav')[0].style.backgroundColor = '#4BADA2'
                        document.getElementById('ser').style.backgroundColor = '#173632'

                            ; break;
                    case 'creative': creative[0].classList.add('anime')
                        creative[1].classList.add('anime')
                        sec[0].style.backgroundColor = '#3380CC'
                        sec[1].style.backgroundColor = '#40A0FF'
                        document.getElementsByTagName('nav')[0].style.backgroundColor = '#40A0FF'
                        document.getElementById('ser').style.backgroundColor = '#14324F'

                            ; break;
                    case 'branding': branding[0].classList.add('anime')
                        branding[1].classList.add('anime')
                        sec[0].style.backgroundColor = '#233559'
                        sec[1].style.backgroundColor = '#2D4473'
                        document.getElementsByTagName('nav')[0].style.backgroundColor = '#2D4473'
                        document.getElementById('ser').style.backgroundColor = '#0E1523'

                            ; break;
                           
                }

                // .....select item.....

                let sib = val.nextElementSibling
                let _h = sib.getAttribute('ulheight')

                // .....item reset.....


                for (i = 0; i < l.length; i++) {
                    if (n != i) {
                        _ul[i].style.height = 0
                        l[i].setAttribute('data-mode', 'off')
                        _li[i].style.backgroundColor = 'rgba(255, 255, 255, 0.01)'

                    }
                }   
                

                val.style.backgroundColor = 'rgba(255, 255, 255, 0.35)'
                if ((val.parentElement.getAttribute('data-mode')) == 'off') {
                    sib.style.height = _h + 'px'
                    val.parentElement.setAttribute('data-mode', 'on')
                } else if ((val.parentElement.getAttribute('data-mode')) == 'on') {
                    sib.style.height = 0
                    val.parentElement.setAttribute('data-mode', 'off')
                }

            })
        })