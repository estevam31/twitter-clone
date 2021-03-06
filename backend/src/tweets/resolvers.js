import Tweet from './model/Tweet';
import { PubSub } from 'apollo-server';

const pubsub = new PubSub();
const MESSAGE_CREATED = 'MESSAGE_CREATED';

export default {
  Query: {
    tweets: () => {
      return Tweet.find()
        .sort({ createdAt: -1 })
        .limit(10);
    }
  },
  Subscription: {
    newTweet: {
      subscribe: () => pubsub.asyncIterator(MESSAGE_CREATED)
    }
  },
  Mutation: {
    createTweet: async (_, args) => {
      const tweet = await Tweet.create({ ...args });
      pubsub.publish(MESSAGE_CREATED, {
        newTweet: tweet
      });
      return tweet;
    }
  }
};
