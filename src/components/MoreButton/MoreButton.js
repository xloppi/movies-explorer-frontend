import './MoreButton.css';

function MoreButton({handleAddCards}) {
    return (
      <div className="more-button">
        <button className="more-button__button" onClick={handleAddCards}>Ещё</button>
      </div>
    );
}

export default MoreButton;
