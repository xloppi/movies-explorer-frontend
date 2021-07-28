import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
      <section className="filter-checkbox">
        <div className="filter-checkbox__container">
          <input className="filter-checkbox__checkbox" type="checkbox"></input>
          <p className="filter-checkbox__title">Короткометражки</p>
        </div>
      </section>
    );
}

export default FilterCheckbox;
