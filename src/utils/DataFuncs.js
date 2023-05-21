 // Get News Item URI / Title 
 const getNewsItemURI = newsItem => {
      const startIndex = newsItem.link.indexOf(".com/") + 5;
      const endIndex = newsItem.link.indexOf("/", startIndex);
      return newsItem.link.slice(startIndex, endIndex);
}

  // Price change tracker function
 const priceChange = (changeValue) => {
      const changeColor =
        parseFloat(changeValue).toFixed(1) === 0
          ? {}
          : parseFloat(changeValue) > 0
          ? { color: "green" }
          : parseFloat(changeValue) < 0
          ? { color: "red" }
          : {};
      const valuePrefix =
        parseFloat(changeValue).toFixed(1) === 0
          ? parseFloat(changeValue).toFixed(1)
          : parseFloat(changeValue) > 0
          ? "+" + parseFloat(changeValue).toFixed(1)
          : parseFloat(changeValue).toFixed(1);
      return <td style={changeColor}>{valuePrefix}%</td>;
};

const getPriceforDisplay = (priceValue) => {
      return  parseInt(priceValue) > 10
              ? priceValue.toFixed(0).toLocaleString()
              : parseInt(priceValue) > 0
              ? priceValue.toFixed(2)
              : priceValue.toFixed(Math.floor(Math.log10(parseFloat(priceValue))) * -1 + 2)
}

export { priceChange, getNewsItemURI, getPriceforDisplay };