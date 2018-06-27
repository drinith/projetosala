 //Chamada do Helpers para manipular as "váriaveis" Blaze do html 
 

 
 Template.lista_leaderboard.helpers({
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


Template.lista_leaderboard.events({
    // 'click .player': function (event, template) {
    //     Session.set("selecionado", this._id);
    // },
    'mousemove, mousedown, touchstart, keypress': function() {
        Session.set("listaOrdenada",false);
        clearTimeout(timer);
        timer = setTimeout(showModal, 6000);
     },


    'click .incrementa': function (event, template) {

        //var selecionado = Session.get("selecionado");
        PlayersList.update(this._id, { $inc: { score: 5 } });
        Session.set("selecionado",this._id);


    },

    'click .decrementa': function () {
        //var selecionado = Session.get("selecionado");
        PlayersList.update(this._id, { $inc: { score: -5 } });
        Session.set("selecionado",this._id);
    }
});


