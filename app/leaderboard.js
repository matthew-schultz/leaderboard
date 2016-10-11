/**
 * Created by matthew on 10/11/2016.
 */

PlayersList = new Mongo.Collection('players');

console.log("asdf");

if(Meteor.isClient){
  // this code only runs on the client
  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find();
    },
    'otherHelperFunction': function(){
      return "Some other function";
    }
  });

  Template.leaderboard.events({
      'click .player': function(){
        console.log("You clicked a .player element");
      }
  });
}

if(Meteor.isServer){

}
