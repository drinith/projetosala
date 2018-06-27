//Criando a instancia para acessar o banco
PlayersList = new Mongo.Collection('players');

//Vamos depois modificar pois Bob está sendo todo momento inserido no banco
PlayersList.insert({
    name: "Bob",
    score: 0
});