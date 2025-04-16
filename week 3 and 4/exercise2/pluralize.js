function pluralize(noun, number) {
  let plural = noun;
  const irregular = { sheep: 'sheep', goose: 'geese' };

  if (number !== 1) {
    plural = irregular[noun] || noun + 's';
  }

  return `${number} ${plural}`;
}