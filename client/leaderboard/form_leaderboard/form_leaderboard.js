

Template.form_leaderboard.events({

    'submit form': function (event) {
        event.preventDefault();
        var playerNameVar = event.target.playerName.value;
        Meteor.call("inserirAluno",playerNameVar);
        console.log("Inseriu");
    }

});