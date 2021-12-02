import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, increaseBy } from '../modules/counter';
import Counter from '../components/Counter';

export default function CounterContainer () {
    // 상태 조회 : state type을 RootState로 지정해야 함
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    // action들 dispatch하는 함수 만듦
    const onIncrease = () => {
        dispatch(increase());
    }
    const onDecrease = () => {
        dispatch(decrease());
    }
    const onIncreaseBy = (diff: number) => {
        dispatch(increaseBy(diff));
    }

    return (
        <Counter
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreaseBy={onIncreaseBy}
        />
    )
}