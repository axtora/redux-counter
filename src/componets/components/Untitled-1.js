const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {
  const counterList = counters.map((counter, i) => {
    <Counter
      key={i}
      index={i}
      {...counter.toJS()}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onSetColor={onSetColor}
  })
}