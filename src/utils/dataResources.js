
// [
//     'https://crypto-news-api.b4a.app/news/theblockcrypto',
//     ,
//     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false',
//     ,
//     ,
//    ,
//     'https://www.googleapis.com/youtube/v3/search?key=AIzaSyB_DuvsQ8DclIA0-RihVYDzCNwjd0fQHes&channelId=UCqK_GSMbpiV8spgD3ZGloSw&part=snippet&maxResults=1&order=date&type=video',
//     'https://www.googleapis.com/youtube/v3/search?key=AIzaSyB_DuvsQ8DclIA0-RihVYDzCNwjd0fQHes&channelId=UCCatR7nWbYrkVXdxXb4cGXw&part=snippet&maxResults=3&order=date&type=video',
//     'https://www.googleapis.com/youtube/v3/search?key=AIzaSyB_DuvsQ8DclIA0-RihVYDzCNwjd0fQHes&channelId=UCwGflGmzevf4fcm-z8E-twA&part=snippet&maxResults=3&order=date&type=video'
// ]
export const dataResources  = [
    {
        name : 'cryptoNewsApi',
        endpoint: 'https://crypto-news-api.b4a.app/news/theblockcrypto'
    },
    {
        name : 'coins',
        endpoint: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C7d%2C30d&locale=en'
    },
    {
        name: 'btc',
        endpoint: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
    },
    {
        name: 'trending',
        endpoint: 'https://api.coingecko.com/api/v3/search/trending'
    },
    {
        name: 'fearAndGreed',
        endpoint: 'https://api.alternative.me/fng/?limit=14'
    },
    {
        name: 'globalData',
        endpoint:  'https://api.coingecko.com/api/v3/global'
    },
    {
        name: 'exchanges',
        endpoint:  'https://api.coingecko.com/api/v3/exchanges?per_page=100'
    }
]



export default dataResources;

//https://newsdata.io/api/1/news?apikey=pub_167632e1074e9c30ea0b34c3119c202cf3bd5&q=cryptocurrency%20,%20crypto%20,%20blockchain%20,%20bitcoin&language=en 