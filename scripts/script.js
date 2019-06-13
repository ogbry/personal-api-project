$(document).ready(function(){

        getData('https://api.opendota.com/api/proPlayers')
        .then(function(players) {
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

      
      getData('https://api.opendota.com/api/proMatches')
      .then(function(matches){
       
        matches.forEach(element => {
            // let matchWinner = element.
            let league = $(
               `
               <div class="match-title">
                    <h1>${element.league_name}</h1>
                    <p>Match ID: ${element.match_id}</p>
                    
                    
                <div class="match-teams">
                    
                    <div class="teams">${element.radiant_name}</div>
                    <div class="teams">${element.dire_name}</div>
                </div>
                <button>Match Details</button>
                
                </div>
               `
            )
            
                


            $('.match-wrapper').append(league);

        });
      })

      window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
        }

        
        function topFunction() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
        }


      getData('https://api.opendota.com/api/teams')
      .then(function(teams){
        console.log(teams)
      })


function getData(url){

    return fetch(url)
    .then(function(response) {
      return response.json();
    })
}