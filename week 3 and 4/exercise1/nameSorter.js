function askAndSortNames() {
  let names = [];
  while (true) {
    let name = prompt("Enter a name (Cancel to stop):");
    if (!name) break;
    names.push(name);
  }
  names.sort();
  document.write("<ol>" + names.map(n => "<li>" + n + "</li>").join('') + "</ol>");
}


