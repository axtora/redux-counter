import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter  = ({number, color, onIncrement, onDecrement, onSetColor}) => {
  return (
    <div 
      className="Counter" 
      onClick={onIncrement} 
      onContextMenu={e => { //마우스 우클릭 감지
        e.preventDefault();
        onDecrement()
      }}
      onDoubleClick={onSetColor}
      style={{backgroundColor: color}}
      >
      {number}
    </div>
  )
}

Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
}

Counter.defaultProps = {
  number: 0,
  color: 'black',
  onIncrement: () => { console.warn('onIncrement not defiend') },
  onDecrement: () => { console.warn('onDecremenet not defiend') },
  onSetColor: () => { console.warn('onSetColor not defiend')}
}

export default Counter;