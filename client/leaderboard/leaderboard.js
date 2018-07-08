
Session.set("myTemplate", "lista_leaderboard");


Template.leaderboard.helpers({
    create: function () {

    },
    rendered: function () {

    },
    destroyed: function () {

    },
    myTemplate: function () {
        return Session.get("myTemplate");
    },
});

Template.leaderboard.events({
    'click .glyphicon-user': function () {

        let nome = "form_leaderboard";
        Session.set("myTemplate", nome);
        console.log("Clicou no botão usuário");

        console.log(Session.get("myTemplate"));
    },

    'click .glyphicon-list': function () {

        let nome = "lista_leaderboard";
        Session.set("myTemplate", nome);
        console.log("Clicou no botão usuário");

        console.log(Session.get("myTemplate"));
    }

});





