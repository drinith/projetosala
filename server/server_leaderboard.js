
//Metodo que vai controlar o que será publicado da coleção para acesso via pesquisa "SELECT"
Meteor.publish('thePlayers', function () {
    var currentUserId = this.userId;
    return PlayersList.find({ createdBy: currentUserId })
});


Meteor.methods({
    "remover": function () {
        PlayersList.remove({});
    },

    "inserirAluno": function (alunoName) {
        let id = Meteor.userId();
        console.log(id);
        PlayersList.insert({
            name: alunoName,
            score: 0,
            createdBy: id

        });
        console.log("tentei inserir");
    },

    "modificaScore": function (id_aluno, valor) {
        PlayersList.update(id_aluno, { $inc: { score: valor } });

    }

});