 //Chamada do Helpers para manipular as "váriaveis" Blaze do html 
 
 // Esse metodo está trazendo para o cliente o PlayerList já filtrado até mesmo pelo usuário logado
 Meteor.subscribe('thePlayers');
 
 Template.lista_leaderboard.helpers({
    'player': function () {
    
        // var currentUserId = Meteor.userId();    
        //Não precisa trazer todo esse cara pois o userId() foi publicado já filtrado
        // return PlayersList.find({createdBy:currentUserId},{sort:{score:-1,name:1}});  
        return PlayersList.find({}, {sort: {score: -1, name: 1}});         
    },

    'selecionado': function () {

        var selecionadoSession = Session.get("selecionado");
        if (this._id == selecionadoSession) {

            return "selected";
        }
       
    }
});


Template.lista_leaderboard.events({
    'click .player': function (event, template) {
        Session.set("selecionado", this._id);
    },
   
    'click .incrementa': function (event, template) {

        //var selecionado = Session.get("selecionado");
        Meteor.call("modificaScore",this._id,5);
        Session.set("selecionado",this._id);

    },

    'click .decrementa': function () {
        //var selecionado = Session.get("selecionado");
        Meteor.call("modificaScore",this._id,-5);
        Session.set("selecionado",this._id);
    }
});


