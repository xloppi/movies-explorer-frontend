export const personalDataForRequest = {
  url: 'https://api.hlopkov.students.nomoredomains.club',
  headers: {
    'Content-Type': 'application/json',
  }
}

export const nameFilter = (arrayMovies, query) => {
  return arrayMovies.filter((c) => {
    if (c.nameRU.toLowerCase().includes(query)) {
      return c;
    }
    if (c.nameEN !== null && c.nameEN.toLowerCase().includes(query)) {
      return c;
    }
    return false;
  });
}
