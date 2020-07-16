import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => (
    {
        type: 'INCREMENT',
        incrementBy
    }
);

const decrementCount = ({ decrementBy = 1 } = {}) => (
    {
        type: 'DECREMENT',
        decrementBy
    }
);

const setCount = ({ count = 0 } = {}) => (
    {
        type: 'SET',
        count
    }
);

const resetCount = () => (
    {
        type: 'RESET'
    }
);

const reduces = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':
            return { count: state.count - action.decrementBy };
        case 'RESET':
            return { count: 0 };
        case 'SET':
            return { count: action.count };
        default:
            return state;
    }
}

const store = createStore(reducer);

const unsbscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 6 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 11 }));

store.dispatch(setCount({ count: 101 }));



