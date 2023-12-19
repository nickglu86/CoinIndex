export const apiEndpoints = [
  {
    name: `cryptoNewsApi`,
    endpoint: `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWSDATA_API_KEY}&q=coincu&language=en`,
    type: `news`,
  },
  {
    name: "cryptoNewsApiAlt",
    endpoint:
      `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWSDATA_API_KEY}&q=cryptopotatoANDcointelegraph&language=en`,
    type: "news",
  },
  {
    name: `coins`,
    endpoint: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C7d%2C30d&locale=en`,
    type: `coins`,
  },
  {
    name: `btc`,
    endpoint: `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`,
    type: `btc`,
  },
  {
    name: `trending`,
    endpoint: `https://api.coingecko.com/api/v3/search/trending`,
    type: `trending`,
  },
  {
    name: `fearAndGreed`,
    endpoint: `https://api.alternative.me/fng/?limit=14`,
    type: `fearAndGreed`,
  },
  {
    name: `globalData`,
    endpoint: `https://api.coingecko.com/api/v3/global`,
    type: `globalData`,
  },
  {
    name: `exchanges`,
    endpoint: `https://api.coingecko.com/api/v3/exchanges?per_page=100`,
    type: `exchanges`,
  },
  // {
  //   name: `copinBerau`,
  //   endpoint: `https://www.googleapis.com/youtube/v3/search?${process.env.REACT_APP_YOUTUBE_API_KEY}&channelId=UCqK_GSMbpiV8spgD3ZGloSw&part=snippet&maxResults=1&order=date&type=video`,
  //   type: `youtube`,
  // },
  // {
  //   name: `dataDash`,
  //   endpoint: `https://www.googleapis.com/youtube/v3/search?${process.env.REACT_APP_YOUTUBE_API_KEY}&channelId=UCCatR7nWbYrkVXdxXb4cGXw&part=snippet&maxResults=3&order=date&type=video`,
  //   type: `youtube`,
  // },
  // {
  //   name: `camerFous`,
  //   endpoint: `https://www.googleapis.com/youtube/v3/search?${process.env.REACT_APP_YOUTUBE_API_KEY}&channelId=UCwGflGmzevf4fcm-z8E-twA&part=snippet&maxResults=3&order=date&type=video`,
  //   type: `youtube`,
  // },
];

export default apiEndpoints;


// OLD  = [
//   'https://crypto-news-api.b4a.app/news/theblockcrypto',
//   'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd',
//   'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false',
//   'https://api.coingecko.com/api/v3/search/trending',
//   'https://api.alternative.me/fng/?limit=14',
//   'https://api.coingecko.com/api/v3/global',
//   'https://www.googleapis.com/youtube/v3/search?key=AIzaSyB_DuvsQ8DclIA0-RihVYDzCNwjd0fQHes&channelId=UCqK_GSMbpiV8spgD3ZGloSw&part=snippet&maxResults=1&order=date&type=video',
//   'https://www.googleapis.com/youtube/v3/search?key=AIzaSyB_DuvsQ8DclIA0-RihVYDzCNwjd0fQHes&channelId=UCCatR7nWbYrkVXdxXb4cGXw&part=snippet&maxResults=3&order=date&type=video',
//   'https://www.googleapis.com/youtube/v3/search?key=AIzaSyB_DuvsQ8DclIA0-RihVYDzCNwjd0fQHes&channelId=UCwGflGmzevf4fcm-z8E-twA&part=snippet&maxResults=3&order=date&type=video'
// ]
