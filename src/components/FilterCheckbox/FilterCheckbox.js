import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
      <div className="filter-checkbox">
        <div className="filter-checkbox__container">
          <input className="filter-checkbox__checkbox" type="checkbox"></input>
          <p className="filter-checkbox__title">Короткометражки</p>
        </div>
      </div>
    );
}

export default FilterCheckbox;
