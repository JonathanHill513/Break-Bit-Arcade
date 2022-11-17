var games = [

    {
        title: 'Fatal Fury',
        image: './images/fatalfury.png',
        date: 'November 25, 1991',
        genre: 'Fighting',
        devoloper: 'SNK',
        publisher: 'SNK',
        platform: 'Arcade',
        players: '1-2 players',
        description: "Fatal Fury: King of Fighters, known as Garō Densetsu: Shukumei no Tatakai (餓狼伝説 ～宿命の闘い～, Hungry Wolf Legend: The Battle of Destiny) in Japan, is a 1991 head-to-head fighting game released by SNK for the Neo Geo arcade and home platforms.[1] Fatal Fury was SNK's first fighting game for the Neo Geo system and served as the inaugural game in their Fatal Fury series, as well as the first game to depict the fictional 'King of Fighters' tournament, which became the basis for the later The King of Fighters games."
    },
    {
        title: 'Super Street Fighter II',
        image: './images/Ssfii.jpg',
        date: 'November 25, 1991',
        genre: 'Fighting',
        devoloper: 'SNK',
        publisher: 'SNK',
        platform: 'Arcade',
        players: '1-2 players',
        description: "Fatal Fury: King of Fighters, known as Garō Densetsu: Shukumei no Tatakai (餓狼伝説 ～宿命の闘い～, Hungry Wolf Legend: The Battle of Destiny) in Japan, is a 1991 head-to-head fighting game released by SNK for the Neo Geo arcade and home platforms.[1] Fatal Fury was SNK's first fighting game for the Neo Geo system and served as the inaugural game in their Fatal Fury series, as well as the first game to depict the fictional 'King of Fighters' tournament, which became the basis for the later The King of Fighters games."
    },
    {
        title: 'Punch-Out!!',
        image: './images/punchout.jpg',
        date: 'November 25, 1991',
        genre: 'Fighting',
        devoloper: 'SNK',
        publisher: 'SNK',
        platform: 'Arcade',
        players: '1-2 players',
        description: "Fatal Fury: King of Fighters, known as Garō Densetsu: Shukumei no Tatakai (餓狼伝説 ～宿命の闘い～, Hungry Wolf Legend: The Battle of Destiny) in Japan, is a 1991 head-to-head fighting game released by SNK for the Neo Geo arcade and home platforms.[1] Fatal Fury was SNK's first fighting game for the Neo Geo system and served as the inaugural game in their Fatal Fury series, as well as the first game to depict the fictional 'King of Fighters' tournament, which became the basis for the later The King of Fighters games."
    },
    {
        title: 'Ghouls N Ghosts',
        image: './images/ghoulsnghosts.png',
        date: 'November 25, 1991',
        genre: 'Fighting',
        devoloper: 'SNK',
        publisher: 'SNK',
        platform: 'Arcade',
        players: '1-2 players',
        description: "Fatal Fury: King of Fighters, known as Garō Densetsu: Shukumei no Tatakai (餓狼伝説 ～宿命の闘い～, Hungry Wolf Legend: The Battle of Destiny) in Japan, is a 1991 head-to-head fighting game released by SNK for the Neo Geo arcade and home platforms.[1] Fatal Fury was SNK's first fighting game for the Neo Geo system and served as the inaugural game in their Fatal Fury series, as well as the first game to depict the fictional 'King of Fighters' tournament, which became the basis for the later The King of Fighters games."
    },
    {
        title: 'Galaga',
        image: './images/Galaga_logo.svg.png',
        date: 'November 25, 1991',
        genre: 'Fighting',
        devoloper: 'SNK',
        publisher: 'SNK',
        platform: 'Arcade',
        players: '1-2 players',
        description: "Fatal Fury: King of Fighters, known as Garō Densetsu: Shukumei no Tatakai (餓狼伝説 ～宿命の闘い～, Hungry Wolf Legend: The Battle of Destiny) in Japan, is a 1991 head-to-head fighting game released by SNK for the Neo Geo arcade and home platforms.[1] Fatal Fury was SNK's first fighting game for the Neo Geo system and served as the inaugural game in their Fatal Fury series, as well as the first game to depict the fictional 'King of Fighters' tournament, which became the basis for the later The King of Fighters games."
    },
]

var postHTML = " "
var postHTML2 = " "
for (var i=0; i < games.length; i++){
var gamelisted = '<div class="container gamecontainer" id="'+games[i].title+'"><div class="game"><img class="gamelogo" src="'+games[i].image+'"/><br><div class="heading"><h3>'+games[i].title+'</h3></div><div class="bodytext gamebodytext"> <h4>Publisher:</h4>'+games[i].publisher+'<br><h4>Developer:</h4>'+games[i].devoloper+'<br><h4>Genre:</h4>'+games[i].genre+'<h4>Players:</h4>'+games[i].players+'<br> <h4>Release Date:</h4>'+games[i].date+'<br><h4>Platform:</h4>'+games[i].platform+'<br><h4>Description:</h4>'+games[i].description+'<br></div></div></div>'

var gameThumbnail = '<div class="gamethumbnail"><a href="#'+games[i].title+'"><img class="gamelogo" src="'+games[i].image+'"<br> <span>'+games[i].title+'</span></div>'


postHTML = postHTML + gamelisted;
postHTML2 = postHTML2 + gameThumbnail;
}

document.getElementById('gamelist').innerHTML = postHTML
document.getElementById('gamethumbnail').innerHTML = postHTML2