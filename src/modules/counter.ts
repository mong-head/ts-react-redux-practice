// action types
// as const : string(변수)이 아닌 상수로 추론되게 함
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;


// actions
export const increase = () => ({
    type: INCREASE
})

export const decrease = () => ({
    type: DECREASE
})

export const increaseBy = (diff: number) => ({
    type: INCREASE_BY,
    // action에 부가적으로 필요한 값을 보통 payload라고 함
    payload : diff
})

type CounterAction = 
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>;

type CounterState = {
    count : number;
};

const initialState: CounterState = {
    count : 0
}

// reducer
function counter(
    state: CounterState = initialState,
    action: CounterAction
): CounterState {
    switch (action.type) {
        case INCREASE:
            return {count: state.count + 1}
        case DECREASE:
            return {count: state.count - 1}
        case INCREASE_BY:
            return {count: state.count + action.payload};
        default:
            return state;
    }
}

export default counter;