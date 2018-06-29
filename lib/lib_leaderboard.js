//Criando a instancia para acessar o banco
PlayersList = new Mongo.Collection('players');
UserAccounts = Meteor.users;

//Vamos depois modificar pois Bob está sendo todo momento inserido no banco

// var vetor = PlayersList.find().fetch();
// console.log(vetor );
// if (vetor.count() == 0) {
//     PlayersList.insert({
//         name: "Bob",
//         score: 0
//     });

//     PlayersList.insert({
//         name: "Felipe",
//         score: 0
//     });
//     PlayersList.insert({
//         name: "Fulano",
//         score: 0
//     });
//     PlayersList.insert({
//         name: "Pagodeiro",
//         score: 0
//     });

// }



