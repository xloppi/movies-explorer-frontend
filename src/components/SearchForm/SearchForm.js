import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useFormWithValidation } from "../../hooks/useForm";
import { useState } from 'react';

function SearchForm({getMovieCards, clearError, error}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" onSubmit={getMovieCards} noValidate>
          <input
            className="search-form__form-input"
            placeholder="Фильм"
            name="search"
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={clearError}
            required
          ></input>
          <button className="search-form__form-button">Поиск</button>
        </form>
        <span className="search-form__input-error">
          {error}
        </span>
        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;
