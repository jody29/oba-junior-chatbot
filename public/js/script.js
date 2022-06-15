const buttons = document.querySelectorAll('#controls li i')
const slider = document.querySelector('.slider-wrapper ul:first-of-type')
const sliderMonsters = document.querySelector("section:nth-of-type(2) .slider-wrapper ul:first-of-type")
const sliderPrinsessen = document.querySelector("section:nth-of-type(3) .slider-wrapper ul:first-of-type")
const mijnBoekenkastNavEl = document.querySelector(".mijnBoekenkastNav")
const mijnBoekenKastSection = document.querySelector("body aside")
const kruisjeBoekenkastSection = document.querySelector(".hideMijnBoekenkast")

// overflow scroll geven als fallback 
// css scrollsnap

// loopen door de sections heen
// beide buttons in de secton krijgen een eventlisterner
// de eventlisener linsk zorgt ervoor in de loop dat de positie van de items naar lijnks verschuift en de aneere naar rechhts verschuift



console.log(buttons)
console.log(mijnBoekenKastSection)
console.log("slider 1" , slider.scrollLeft)
console.log("slider 2", sliderMonsters.scrollLeft)
console.log("slider 3", sliderPrinsessen.scrollLeft)

buttons[0].classList.add('disable')
buttons[2].classList.add('disable')
buttons[4].classList.add('disable')

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Spannend
        if (slider.scrollLeft < 1151) {
            buttons[0].classList.add('disable')
        }
        // Monsters
        if (sliderMonsters.scrollLeft < 1151) {
            buttons[2].classList.add('disable')
        }
       //  Prinsessen
        if (sliderPrinsessen.scrollLeft < 1151) {
            buttons[4].classList.add('disable')
        }

        	// Spannende slider
        if (Array.prototype.indexOf.call(buttons, e.target) === 0) {
            slider.scrollLeft -= 1150
            buttons[1].classList.remove('disable')
            
              
        } 
        else if (Array.prototype.indexOf.call(buttons, e.target) === 1) {
            slider.scrollLeft += 1150
            buttons[0].classList.remove('disable')

            if (slider.scrollLeft >= 2000) {
                buttons[1].classList.add('disable')
            }
        }

        // Monster Slider
        if (Array.prototype.indexOf.call(buttons, e.target) === 2) {
            sliderMonsters.scrollLeft -= 1150
            buttons[3].classList.remove('disable')
            
              
        } 
        else if (Array.prototype.indexOf.call(buttons, e.target) === 3) {
            sliderMonsters.scrollLeft += 1150
            buttons[2].classList.remove('disable')

            if (sliderMonsters.scrollLeft >= 2000) {
                buttons[3].classList.add('disable')
            }
        }

            // // Prinsessen Slider
            if (Array.prototype.indexOf.call(buttons, e.target) === 4) {
                sliderPrinsessen.scrollLeft -= 1150
                buttons[5].classList.remove('disable')
                
                  
            } 
            else if (Array.prototype.indexOf.call(buttons, e.target) === 5) {
                sliderPrinsessen.scrollLeft += 1150
                buttons[4].classList.remove('disable')
    
                if (sliderPrinsessen.scrollLeft >= 2000) {
                    buttons[5].classList.add('disable')
                }
            }
    })
})


// Mijn boeken kast

mijnBoekenKastSection.classList.add("hidden")

mijnBoekenkastNavEl.addEventListener("click", ()=> {
    mijnBoekenKastSection.className = "";
})

kruisjeBoekenkastSection.addEventListener("click", ()=> {
    mijnBoekenKastSection.classList.add("hidden")
})

