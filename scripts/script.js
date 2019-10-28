$(document).ready(function(){
var header = document.querySelector('.header')

getData('https://api.opendota.com/api/search')
.then(function(search){
    var input = document.createElement('input')
    input.setAttribute('id', "search-input")
    input.setAttribute('placeholder', "Hero name...")
    header.prepend(input)
})

getData('https://api.opendota.com/api/heroStats')
.then(function(heroes){
    heroes.map(hero =>{
            var appendHere = document.querySelector('.box')
            var heroBox = document.createElement('a')
            var p = document.createElement('p')
            heroBox.setAttribute('class', 'hero-box')
            heroBox.setAttribute('rel' , "modal:open")
            heroBox.setAttribute('href' , "#ex1")
            heroBox.setAttribute('id', `${hero.id}`)
            var icon = document.createElement('IMG')
            var img = document.createElement('IMG')
            icon.setAttribute('class', "hero-icon")
            img.setAttribute('class', "hero-image")
            icon.setAttribute("src", `https://api.opendota.com${hero.icon}` )
            
            p.innerHTML = hero.localized_name
            appendHere.appendChild(heroBox)
            heroBox.appendChild(p)
            heroBox.appendChild(icon)
        
        $('.hero-box').mouseover(function(e){
            $(this).css('transform', 'scale(1.7)')
        })
        $('.hero-box').mouseout(function(e){
            $(this).css('transform', 'scale(1)')
        })
        $('.hero-box').click(function(e){
            var appendModal = document.querySelector('.container');
            var modalDiv = document.createElement('div')
            modalDiv.setAttribute('id', "ex1");
            modalDiv.setAttribute('class', 'modal')
            appendModal.appendChild(modalDiv)
            var p = document.createElement('p')
            var img = document.createElement('IMG')
            p.innerHTML = hero.localized_name
            img.setAttribute("src", `https://api.opendota.com${hero.img}`)
            
            modalDiv.appendChild(p)
            modalDiv.appendChild(img)
        })
        
    })
       
    
   
    console.log(heroes)
})


    function getData(url){
        return fetch(url)
        .then(function(response) {
        return response.json();
        })
    }

})
