window.onload = function(){
$(document).ready(function(){


// getData('https://api.opendota.com/api/heroStats')
// .then(function(data){
//     var searchInput = document.querySelector('.search')
//     console.log(searchInput.value)
//     data.forEach(element => {
//         console.log(element.localized_name)
//     })

// })


getData('https://api.opendota.com/api/heroStats')
.then(function(heroes){
    heroes.forEach(hero => {
            var appendHere = document.querySelector('.box')
            var heroBox = document.createElement('a')
            var p = document.createElement('p')
            heroBox.setAttribute('class', 'hero-box')
            heroBox.setAttribute('rel' , "modal:open")
            heroBox.setAttribute('href' , "#ex1")
            heroBox.setAttribute('data-roles', `${hero.roles}`)
            heroBox.setAttribute('id' , `${hero.localized_name}`)
            heroBox.setAttribute('data-id', `${hero.name}`)
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
    });

    $('.hero-box').click(function(e){

        var appendModal = document.querySelector('.container');
        var modalDiv = document.createElement('div')
        modalDiv.setAttribute('id', "ex1");
        modalDiv.setAttribute('class', 'modal')
        
        var subCont = document.createElement('div')
        subCont.setAttribute('class', 'sub-container')
        modalDiv.appendChild(subCont)

        var headerDiv = document.createElement('div')
        headerDiv.setAttribute('class', 'headerDiv')
        subCont.prepend(headerDiv)

        var imgDiv = document.createElement('div')
        imgDiv.setAttribute('class', 'imgDiv')
        subCont.append(imgDiv)

        var roleDiv = document.createElement('div')
        roleDiv.setAttribute('class', 'roleDiv')
        subCont.append(roleDiv)

        appendModal.appendChild(modalDiv)
        var headerspan = document.createElement('span')
        var span = document.createElement('span')
        var img = document.createElement('IMG')
        headerspan.innerText += this.id

        span.innerText += $(this).data('roles').replace(/(,)+/g,' | ')
        var imgUrl = $(this).data('id').split('').slice(14).join('')
        
        img.setAttribute("src", `https://api.opendota.com/apps/dota2/images/heroes/${imgUrl}_full.png?`)
        headerDiv.appendChild(headerspan)
        imgDiv.appendChild(img)
        roleDiv.appendChild(span)
    })

    var searchInput = document.querySelector('.search')
    
    searchInput.addEventListener('keyup', function(){
        value = searchInput.value.toLowerCase()

        $(`.hero-box`).filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
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
}