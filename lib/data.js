Sites = new Mongo.Collection('ibhsites');
History = new Mongo.Collection('sample');

if (Meteor.isServer) {
    Meteor.methods({
        checkGeometry: function () {
            this.unblock();
            return Meteor.http.call("GET", "https://maps.googleapis.com/maps/api/js?libraries=geometry&sensor=false");
        }
    });
}

//invoke the server method
if (Meteor.isClient) {
    Meteor.call("checkGeometry", function(error, results) {
        console.log(results.content); //results.data should be a JSON object
    });
}