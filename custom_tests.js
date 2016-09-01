// Reducer
const counter = (state = 0, action) => {
  if (typeof state === 'undefined') {
    return 0;
  }

  if (action.type === 'INCREMENT') {
    return state+1;
  } else if (action.type === 'DECREMENT') {
    return state-1;
  }
  return state;
};

expect(
  counter(0, { type: 'INCREMENT' })
).toEqual(1);

expect(
  counter(0, { type: 'INCREMENT' })
).toEqual(1);

expect(
  counter(0, { type: 'INCREMENT' })
).toEqual(1);

expect(
  counter(0, { type: 'INCREMENT' })
).toEqual(1);


console.log('Tests passed!');
