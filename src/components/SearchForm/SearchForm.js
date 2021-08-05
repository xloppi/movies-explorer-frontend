import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
      <section className="search-form">
        <div className="search-form__container">
          <form className="search-form__form">
            <input className="search-form__form-input" placeholder="Фильм"></input>
            <button className="search-form__form-button">Поиск</button>
          </form>
          <FilterCheckbox />
        </div>
      </section>
    );
}

export default SearchForm;
