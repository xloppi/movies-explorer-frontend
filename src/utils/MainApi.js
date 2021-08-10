// https://api.hlopkov-movies-exp.nomoredomains.monster
/* GET /users/me - возвращает информацию о пользователе (email и имя)

PATCH /users/me - обновляет информацию о пользователе (email и имя)

GET /movies - возвращает все сохранённые пользователем фильмы

POST /movies - создаёт фильм с переданными в теле country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId

DELETE /movies/movieId - удаляет сохранённый фильм по id

POST /signup - создаёт пользователя с переданными в теле email, password и name

POST /signin - проверяет переданные в теле почту и пароль и возвращает JWT

POST /signout - выход из профиля(удаляет токен) */
export const BASE_URL = 'https://api.hlopkov-movies-exp.nomoredomains.monster';

const parseResponse = (res) => {

  if(res.ok) {
    return res.json();
  }
  return Promise.reject({status: res.status});
};

export const register = ({email, password, name}) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify({
      "email": email,
      "password": password,
      "name": name,
    })
  })
    .then(parseResponse);
 }

export const authorize = ({password, email}) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify ({
      "email": email,
      "password": password,
    })
  })
  .then((res) => {
    if(res.ok) {
      return res;
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

export const getMe = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
  })
  .then(parseResponse)
}
