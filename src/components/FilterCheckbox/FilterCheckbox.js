import './FilterCheckbox.css';

function FilterCheckbox({setIsFilterChecked}) {
  const handleChange = (event) => {
    if (event.target.checked) {
      setIsFilterChecked(true);
    } else {
      setIsFilterChecked(false);
    }
  }

  return (
    <div className="filter-checkbox">
      <div className="filter-checkbox__container">
        <input className="filter-checkbox__checkbox" type="checkbox" onChange={handleChange}></input>
        <p className="filter-checkbox__title">Короткометражки</p>
      </div>
    </div>
  );
}

export default FilterCheckbox;
