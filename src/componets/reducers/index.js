import * as types from '../actions/ActionTypes';

//초기 상태를 정의
const inititalState = {
    counters: [
        {
            color: 'black',
            index: 0
        }
    ]
}

//Reducer 함수 구현
function Counter(state = inititalState, action) {
    const { counters } = state;

    switch(action.type) {
        case types.CREATE:
            return {
                counters: [
                    ...counters,
                    {
                        color: action.color,
                        number: 0
                    }
                ]
            };
        case types.REMOVE:
            return {
                counters: counters.slice(0, counters.length - 1)
            };
        case types.INCREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number + 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        case type.DECRMENT:
            return {
                counetrs: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number - 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        case type.SET_COLOR:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        color: action.color,
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        default: 
            return state;
    }
}

export default Counter;