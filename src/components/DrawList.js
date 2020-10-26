import React from 'react';
import { connect } from 'react-redux';
import { fetchDraws, selectDraw } from '../actions';
import './DrawList.css';

class DrawList extends React.Component {
  componentDidMount() {
    this.props.fetchDraws();
  }

  renderList() {
    return this.props.draws.map((draw) => {
      return (
        <div key={draw.drawNumber}>
          <div
            className="draw-container"
            onClick={() => this.props.selectDraw(draw)}
          >
            <h2>
              <div className="number">Game ID: {draw.drawNumber}</div>
              <div className="date">Draw Date: {draw.drawDate}</div>
            </h2>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div
        className="rendered-list"
        style={{ position: 'absolute', right: '0px' }}
      >
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { draws: state.draws };
};

export default connect(mapStateToProps, { fetchDraws, selectDraw })(DrawList);
