function getHourDiff(pubDate) {
  const now = new Date();

  const diff = (pubDate) => {
    const newPubDate = new Date(pubDate);
    const diffInMillis = Math.abs(now - newPubDate);
    return diffInMillis;
  };
  const diffInHours = Math.floor(diff(pubDate) / 1000 / 60 / 60);

  return diffInHours;
}

export default getHourDiff;
