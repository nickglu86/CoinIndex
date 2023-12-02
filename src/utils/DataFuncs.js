 // Get News Item URI / Title 
 const getNewsItemURI = (newsItem) => {
      const startIndex = newsItem.link.substring(0, newsItem.link.length-1).lastIndexOf("/");
      return newsItem.link.slice(startIndex +1, newsItem.link.length);
    };

  // Price change tracker function
 const priceChange = (changeValue) => {
      const changeColor =
        parseFloat(changeValue).toFixed(1) === 0
          ? {}
          : parseFloat(changeValue) > 0
          ? { color: "#16c784" }
          : parseFloat(changeValue) < 0
          ? { color: "#ea3943" }
          : {};
      const valuePrefix =
        parseFloat(changeValue).toFixed(1) === 0
          ? parseFloat(changeValue).toFixed(1)
          : parseFloat(changeValue) > 0
          ? "+" + parseFloat(changeValue).toFixed(1)
          : parseFloat(changeValue).toFixed(1);
      return <td style={{...changeColor,  fontWeight: "600"}}>{valuePrefix}%</td>;
};

// Price Coin Price for Display
const getPriceforDisplay = (priceValue) => {
      return  parseInt(priceValue) > 10
              ? priceValue.toFixed(0).toLocaleString()
              : parseInt(priceValue) > 0
              ? priceValue.toFixed(2)
              : priceValue.toFixed(Math.floor(Math.log10(parseFloat(priceValue))) * -1 + 2)
}

const adjustDateStirng = date => {
  const splitedDateArr = date.split(' ');
  const dateArr = splitedDateArr[0].split('-');
  const timeArr = splitedDateArr[1].split(':');

  return `${timeArr[0]}:${timeArr[1]} ${dateArr[2]}-${dateArr[1]}`

}

//Replace "Read more...Coincu News"
const clearDesc = desc => desc.replace("Read more...Coincu News", '');


export { priceChange, getNewsItemURI, getPriceforDisplay,  adjustDateStirng, clearDesc};