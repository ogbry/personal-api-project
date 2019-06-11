$(document).ready(function(){
    
   
        
        // getData('https://api.opendota.com/api/proPlayers')
        // .then(function(players) {
        //     console.log(players)
            
        //    players.forEach(element => {
        //         let val = $(
                    
        //             `   
        //                 <p>${element.account_id}</p>
        //                 <img src="${element.avatar}" alt="">
        //                 <p>${element.name}</p>
        //                 <p>${element.fantasy_role}</p>
        //                 <p>${element.personaname}</p>
        //                 <p>${element.is_pro}</p>
        //                 <hr>
        //             `
                    
        //         )

        //         $('.jokes').prepend(val);
        //    });
            
                      
        // });
        
    //   });



    // //   getData('http://api.icndb.com/jokes/')
    // //     .then(function(response){
    // //         let jokesArr = response.value;
            

    //         jokesArr.forEach(element => {

    //             let val = $(
    //                 `
    //                     <p>${element.joke}</p>
    //                     <hr>
    //                 `

    //             )

    //             $('.jokes').prepend(val);
                
    //         });
            
    //     })

    getData('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(function(cards) {
            console.log(cards)
                
        });

        getData('https://deckofcardsapi.com/api/deck/new/draw/?count=2')
        .then(function(draw){
            console.log(draw)
            let val = $(
                    `
                        <p>${draw.success}</p>
                        
                        <hr>
                    `

                )
                $('.jokes').prepend(val);
        })


})







function getData(url){

    return fetch(url)
    .then(function(response) {
      return response.json();
    })
}