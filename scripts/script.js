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
                        <tr class="table-wrapper" style="color: white">
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
            let matchWinner = element.radiant_win;
            if(matchWinner = true){
                matchWinner = element.radiant_name;
            }
            else{
                matchWinner = element.dire;
            }

            let league = $(
               `
               <div class="match-title">
                    <h1>${element.league_name}</h1>
                    <p>Match ID: ${element.match_id}</p>
                    
                    
                <div class="match-teams">
                    
                    <div class="teams">${element.radiant_name}</div>
                    <div class="teams">${element.dire_name}</div>
                </div>
                <button class="btn-toggle-${element.match_id}" >Match Details</button>
                
                </div>

               `
            )
            let winner = $(

                `
                <div class="match-history-${element.match_id} box-history" style="display: none">
                <div class="team-win">
                    <p>${matchWinner} Victory!</p>
                    <em>Match ID: ${element.match_id}</em>
                </div>
                <div class="team-history">
                    <div class="radiant-team box">
                        <div class="team-score radiant">
                            <p>${element.radiant_score}</p>
                        </div>
                        <div class="radiant team-name">
                            ${element.radiant_name}
                        </div>
                    </div>
                    <div class="dire-team box">
                        <div class="team-score dire">
                            <p>${element.dire_score}</p>
                        </div>
                        <div class="dire team-name">
                            ${element.dire_name}
                        </div>
                    </div>
                    </div>
                </div>
                `
            )
                

                
            $('.match-wrapper').append(league);
            $('.match-wrapper').append(winner);

            $(document).mouseup(function(e){
                var container = $(`.match-history-${element.match_id}`);
            
                if(!container.is(e.target) && container.has(e.target).length === 0){
                    container.hide();
                }
            });

            $(`.btn-toggle-${element.match_id}`).click(function(){
                $(`.match-history-${element.match_id}`).toggle();
            })  
            
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
        

        teams.forEach(element => {

            let logo = element.logo_url;
            if(logo == null){
                logo = 'images/No_Logo_Available.png';
            }
            else{
                logo = element.logo_url;
            }
            if(name == null){
                name = 'Unknown';
            }
            else{
                name = element.name;
            }

            let value = $(
                
                `
                <tr style="color: white">
                    <th rowspan="3"><img id="row-logo" src="${logo}" alt=""> ${name}</th>
                    <td>Team Rating: ${element.rating}</td>
                </tr>
                
                <tr style="color: white">
                    <td>Wins: ${element.wins}</td>
                </tr>
                <tr style="color: white">
                    <td>Losses: ${element.losses}</td>
                </tr>
                
                `

            )

                $('.teams-table').append(value);

        });


        $('.btn-random').click(function() {

            $('.game-output').empty();
            var randomTeam = teams[Math.floor(Math.random()*teams.length)];

            let noLogo = randomTeam.logo_url;
            if(noLogo == null){
                noLogo = 'images/No_Logo_Available.png';
            }
            else{
                noLogo = randomTeam.logo_url;
            }

            let teamValue = $(
                `
                    <img src="${noLogo}" alt="">
                    <h1>${randomTeam.name}</h1>

                `
            )

            $('.game-output').append(teamValue);

          });


      })


function getData(url){

    return fetch(url)
    .then(function(response) {
      return response.json();
    })
}