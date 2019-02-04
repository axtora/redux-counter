import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({number, color, index, onIncrement, onDecrement, onSetColor}) => {
  return (
    <div 
      className="Counter" 
      onClick={() => onIncrement(index)} 
      onContextMenu={e => { //마우스 우클릭 감지
        e.preventDefault();
        onDecrement(index)
      }}
      onDoubleClick={() => onSetColor(index)}
      style={{backgroundColor: color}}
      >
      {number}
    </div>
  )
}

Counter.propTypes = {
  index: PropTypes.number,
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
}

Counter.defaultProps = {
  index: 0,
  number: 0,
  color: 'black',
  onIncrement: () => { console.warn('onIncrement not defiend') },
  onDecrement: () => { console.warn('onDecremenet not defiend') },
  onSetColor: () => { console.warn('onSetColor not defiend')}
}

export default Counter;