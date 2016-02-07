Meteor.methods({
	searchTweets:function(term){
		var tweets = Async.runSync(function(done) {
			T.get('search/tweets', { q: term, count: 2 }, function(err, data) {
				done(null, data);
			});
		});
		return tweets.result;
	}
});
