const lexicon = {
  "merry": "god", "christmas": "jul", "and": "och",
  "happy": "gott", "new": "nytt", "year": "år"
};

function translateToSwedish(phrase) {
  return phrase.toLowerCase().split(" ").map(word => lexicon[word] || word).join(" ");
}