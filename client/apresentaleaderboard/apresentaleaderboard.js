 // this code only runs on the client

    //Chamada do Helpers para manipular as "váriaveis" Blaze do html 
    Template.apresentaleaderboard.helpers({
        'player': function () {

            return PlayersList.find({}, { sort: { score: -1, name: 1 } });

        },
        'classeSelecionado': function () {
            let selecionado = Session.get("selecionado");
            console.log(selecionado);
            if (this._id == selecionado) {
                return "selecionado";
            }
        },

        'alunoSelecionado': function () {

            var id = Session.get("selecionado");
            return PlayersList.findOne(id);

        }
    });


    Template.apresentaleaderboard.events({

        'click .player': function () {

            Session.set("selecionado", this._id);
            
        },
        'click .increment': function () {

            let selecionado = Session.get("selecionado");
        
            PlayersList.update(selecionado, { $inc: { score: 5 } })

        },
        'click .decrement': function () {

            let selecionado = Session.get("selecionado");
            console.log(selecionado);
            PlayersList.update(selecionado, { $inc: { score: -5 } })

        }

    });