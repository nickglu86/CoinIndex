export const getNewsItemURI = newsItem => {
      const startIndex = newsItem.link.indexOf(".com/") + 5;
      const endIndex = newsItem.link.indexOf("/", startIndex);
      return newsItem.link.slice(startIndex, endIndex);
}