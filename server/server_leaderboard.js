import { Meteor } from 'meteor/meteor';

Meteor.methods({
    "remover":function(){
        PlayersList.remove({});
    }
});