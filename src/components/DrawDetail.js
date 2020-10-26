import React from 'react';
import { connect } from 'react-redux';
import './DrawDetail.css';

const DrawDetail = ({ draw }) => {
  if (!draw) {
    return (
      <div>
        <h1 className="default-text">Select A Game to see if you won!</h1>
        <img className="default-image" src="/powerball_default.jpg" />
      </div>
    );
  }
  return (
    <div className="selected-container">
      <h4>Draw Number:</h4>
      <p>{draw.drawNumber}</p>
      <h4>Draw Bonus:</h4>
      <p>{draw.bonus}</p>
      <h4>Draw Date:</h4>
      <p>{draw.drawDate}</p>
      <h4>Winning Numbers:</h4>
      <p>
        {draw.winningNumbers.map((winnings) => {
          return <span>{winnings} </span>;
        })}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { draw: state.selectedDraw };
};

export default connect(mapStateToProps)(DrawDetail);
