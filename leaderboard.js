//Criando a instancia para acessar o banco
PlayersList = new Mongo.Collection('players');

//Vamos depois modificar pois Bob está sendo todo momento inserido no banco
PlayersList.insert({
    name: "Bob",
    score: 0
});


//Dividindo a condição para tarefas de cliente
if (Meteor.isClient) {
    // this code only runs on the client

    //Chamada do Helpers para manipular as "váriaveis" Blaze do html 
    Template.leaderboard.helpers({
        'player': function () {
            return PlayersList.find({},{sort:{score:-1,name:1}});
        },

        'selecionado': function () {

            var selecionadoSession = Session.get("selecionado");
            if (this._id == selecionadoSession) {

                return "selected";
            }
        }
    });


    Template.leaderboard.events({
        // 'click .player': function (event, template) {
        //     Session.set("selecionado", this._id);
        // },

        'click .incrementa': function (event, template) {

            //var selecionado = Session.get("selecionado");
            PlayersList.update(this._id, { $inc: { score: 5 } });


        },

        'click .decrementa': function () {
            //var selecionado = Session.get("selecionado");
            PlayersList.update(this._id, { $inc: { score: -5 } });

        }
    });


}


//Dividindo a condição para tarefas de Server
if (Meteor.isServer) {
    // this code only runs on the client
}