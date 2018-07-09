Template.addPlayerForm.events({

    'submit form': function (event) {
        event.preventDefault();

        let alunoNome = event.target.playerName.value;
        // let currentUserId = Meteor.userId();
        // let alunoNome = $('#inputName').val();

        // PlayersList.insert({ 'name': alunoNome, 'score': 0, 'criadoPor': currentUserId });
        Meteor.call("insertPlayerData",alunoNome);


        event.target.playerName.value = "";
    },

    'click .remove': function (event) {

        var idAluno = Session.get("selecionado");

        PlayersList.remove({ idAluno });


    }
});