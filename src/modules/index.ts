import { combineReducers  } from "redux";
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;

// root reducer의 반환값을 유추해줌
// 이 type은 container component에서 불러와서 사용함
export type RootState = ReturnType<typeof rootReducer>;