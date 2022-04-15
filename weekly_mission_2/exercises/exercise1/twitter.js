const tweet = {
    author: "oscarc",
    id: 123231, // from only this author tweets, not all of existing tweets in twitter, because they're too many
    text: "this is a tweet", 
    content: ["blue_bird.png", "green_bird.png"], // can be either an array of media or another tweet, which would mean this is a quote tweet
    date: new Date(),
    retweets: ["oscarc", "carlogilmar", "miriamvalverde22"], // user list, by username
    quoteTweets: [{ author: "carlogilmar", id: 11232 }, { author: "miriamvalverde22", id: 11332 }], // 
    comments: [], // array of tweets
    likes: ["carlogilmar", "mizhiaart"],
    quoteTweet: function (tweet_id) {
        this.quoteTweets.push(tweet_id)
    }, 
    comment: function(tweet) {
        this.comments.push(tweet)
    },
    like: function (user_id) {
        this.likes.push(user_id)
    }
}

// to identify tweets. 
// intended to save this, and when needed, look for the actual tweet... instead of saving the tweet itself, to save server storage
const tweet_id = { author: "carlogilmar", id: 11232 } 

const user = {
    user: "Oscar", 
    username: "oscarc", 
    bio: "software developer / studying computer engineering", 
    followers: ["carlogilmar", "mizhiaart", "valverde22"], 
    following: ["carlogilmar", "github", "mariana22lopez"],
    tweets: [
        {
            author: this.username,
            id: 123231,
            text: "this is a tweet", 
            content: ["blue_bird.png", "green_bird.png"], 
            date: new Date(),
            retweets: ["oscarc", "carlogilmar", "miriamvalverde22"], 
            quoteTweets: [{ author: "carlogilmar", id: 11232 }, { author: "miriamvalverde22", id: 11332 }], // 
            comments: [{author: "carlogilmar", id: 11234}, {author: "miriamvalverde22", id: 16232}]
        }, 
        {
            author: this.username,
            id: 123641,
            text: "this is another tweet", 
            content: [], 
            date: new Date(),
            retweets: [], 
            quoteTweets: [{ author: "miriamvalverde22", id: 13232 }], // 
            comments: [{author: "miriamvalverde22", id: 16423}]
        }
    ],
    media: [{author: this.username, id: 123231,}],
    likes: [{ author: "carlogilmar", id: 11232 }, { author: "mariana22lopez", id: 11132 }],
    follow: function(follower) {
        if (!this.followers.includes(follower.username)) {
            this.followers.push(follower)
        }
    }, 
    unfollow: function(unfollower) {
        if (this.followers.includes(this.unfollower.username)) {
            this.followers.pop(unfollower)
        }
    },
    tweet: function(tweet){
        this.tweets.push(tweet)
    }
}


const trending_topic = {
    hashtag: "#onepiece", 
    topic: "Anime", 
    tweets: 1445
}

const hashtag = {
    prefix: "#", 
    keyword: "onepiece"
}