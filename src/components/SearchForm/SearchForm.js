import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState } from 'react';

function SearchForm({getMovieCards, setIsFilterChecked}) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(event.target.search.value) {
      getMovieCards(query);
    } else {
      setError("Нужно ввести ключевое слово");
    }
  }

  const errorClear = () => {
    setError("");
  }

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" onSubmit={handleSubmit} noValidate>
          <input
            className="search-form__form-input"
            placeholder="Фильм"
            name="search"
            value={query}
            onChange={handleInputChange}
            onFocus={errorClear}
            required
          ></input>
          <button className="search-form__form-button">Поиск</button>
        </form>
        <span className="search-form__input-error">
          {error}
        </span>
        <FilterCheckbox {...{setIsFilterChecked}} />
      </div>
    </section>
  );
}

export default SearchForm;
