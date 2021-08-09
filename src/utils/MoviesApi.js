// https://api.nomoreparties.co/beatfilm-movies

export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const parseResponse = (res) => {
  if(res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getContent = () => {
  return fetch(`${BASE_URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(parseResponse)
}
