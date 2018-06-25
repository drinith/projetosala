//Criando a instancia para acessar o banco
PlayersList = new Mongo.Collection('players');
var count=0;
//Vamos depois modificar pois Bob está sendo todo momento inserido no banco

// PlayersList.insert({
//     name: "Bob",
//     score: 0
//     });


//Dividindo a condição para tarefas de cliente
if (Meteor.isClient) {
    // this code only runs on the client

    //Chamada do Helpers para manipular as "váriaveis" Blaze do html 
    Template.leaderboard.helpers({
        'player': function () {
            
            return PlayersList.find().fetch();
            
        },
        'classeSelecionado':function(){
            let selecionado = Session.get("selecionado");   
            console.log(selecionado);
            if(this._id==selecionado){                    
                return "selecionado";
            }
        }
    });


    Template.leaderboard.events({
        
        'click .player':function(){
           
            Session.set("selecionado",this._id);
            console.log(this);
        },
        'click .increment':function(){
            
            let selecionado = Session.get("selecionado");
            console.log(selecionado);
            PlayersList.update(selecionado,{$inc:{score:5}})

        },
        'click .decrement':function(){
            
            let selecionado = Session.get("selecionado");
            console.log(selecionado);
            PlayersList.update(selecionado,{$inc:{score:-5}})

        }
        
    });

}

//Dividindo a condição para tarefas de Server
if (Meteor.isServer) {
    // this code only runs on the client
}