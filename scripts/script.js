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
        var heroBox = document.createElement('div')
        var p = document.createElement('p')
        heroBox.setAttribute('class', 'hero-box')
        var icon = document.createElement('IMG')
        var img = document.createElement('IMG')
        icon.setAttribute('class', "hero-icon")
        img.setAttribute('class', "hero-image")
        icon.setAttribute("src", `https://api.opendota.com${hero.icon}` )
        img.setAttribute("src", `https://api.opendota.com${hero.img}` )
        
        
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
        
    })
})


    function getData(url){
        return fetch(url)
        .then(function(response) {
        return response.json();
        })
    }

})
