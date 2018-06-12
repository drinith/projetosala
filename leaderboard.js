//Criando a instancia para acessar o banco
PlayersList = new Mongo.Collection('players');

//Vamos depois modificar pois Bob está sendo todo momento inserido no banco
PlayersList.insert({
    name: "Bob"+count,
    score: 0
    });


//Dividindo a condição para tarefas de cliente
if (Meteor.isClient) {
    // this code only runs on the client

    //Chamada do Helpers para manipular as "váriaveis" Blaze do html 
    Template.leaderboard.helpers({
        'player': function () {
            return PlayersList.find().fetch();
        }
    });
}


//Dividindo a condição para tarefas de Server
if (Meteor.isServer) {
    // this code only runs on the client
}