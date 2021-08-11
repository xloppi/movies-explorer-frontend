// https://api.hlopkov-movies-exp.nomoredomains.monster
/* GET /users/me - возвращает информацию о пользователе (email и имя)

PATCH /users/me - обновляет информацию о пользователе (email и имя)

GET /movies - возвращает все сохранённые пользователем фильмы

POST /movies - создаёт фильм с переданными в теле country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId

DELETE /movies/movieId - удаляет сохранённый фильм по id

POST /signup - создаёт пользователя с переданными в теле email, password и name

POST /signin - проверяет переданные в теле почту и пароль и возвращает JWT

POST /signout - выход из профиля(удаляет токен) */
const BASE_URL = 'https://api.hlopkov-movies-exp.nomoredomains.monster';

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
    body: JSON.stringify ({
      "email": email,
      "password": password,
    })
  })
  .then(parseResponse)
}


export const getMe = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    credentials: 'include',
  })
  .then(parseResponse)
}

export const saveMovieCard = ({country, director, duration, year, description, image, trailerLink, nameRU, nameEN, id}, token) => {
  return fetch(`${BASE_URL}/movies`, {
     method:'POST',
     headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
     body: JSON.stringify ({
      "country": country,
      "director": director,
      "duration": duration,
      "year": year,
      "description": description,
      "image": `https://api.nomoreparties.co${image.url}`,
      "trailer": trailerLink,
      "nameRU": nameRU,
      "nameEN": nameEN,
      "thumbnail": `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
      "movieId": id,
    }),
     credentials: 'include',
   })
   .then(parseResponse);
}

export const deleteMovieCard = (id, token) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    credentials: 'include',
  })
  .then(parseResponse);
}

export const getSavedMovieCards = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    credentials: 'include',
  })
  .then(parseResponse);
}

export const updateUser = (data, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify ({
      "name": data.name,
      "email": data.email,
    }),
    credentials: 'include',
  })
  .then(parseResponse);
}

//country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId

//Для выхода при использовании куков для авторизации
/* export const signout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
  })
  .then(parseResponse)
} */
