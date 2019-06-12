$(document).ready(function(){

   
        
        getData('https://api.opendota.com/api/proPlayers')
        .then(function(players) {
            console.log(players)
           players.forEach(element => {
                let countryCode = element.loccountrycode;
                let teamName = element.team_name;
                let role = element.fantasy_role;
                if(countryCode == null){
                    countryCode = `--`;
                }
                else{
                    countryCode = `<img src="images/1x1/${countryCode}.svg" alt="">`;
                }
                if(teamName == null){
                    teamName = ''
                }
                if(role == 0){
                    role = 'Coach'
                }
                else if(role == 1){
                    role = 'Mid'
                }
                else if(role == 2){
                    role = 'Hard Carry'
                }
                else if(role == 3){
                    role = 'Offlaner'
                }
                else if(role == 4){
                    role = 'Roam Support'
                }
                else if(role == 5){
                    role = 'Full Support'
                }
               
                let val = $(
                    
                    `   
                        <tr class="table-wrapper">
                            <td>${countryCode}</td>
                            <td><img src=${element.avatar} alt=""> &nbsp;${element.name}</td>
                            <td>${element.personaname}</td>
                            <td>${teamName}</td>
                            <td>${role}</td>
                            <td>

                            <p><a href="${element.profileurl}"><img src="images/steam.png" alt=""></a></p>
                            
                            
                            </td>
                            
                        </tr>

                    `
                    
                )
                    
                $('.player-table').append(val);
           });
                     
        });
        
      });



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







function getData(url){

    return fetch(url)
    .then(function(response) {
      return response.json();
    })
}