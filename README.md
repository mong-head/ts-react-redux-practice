# typescript react redux practice

## 설치

```powershell
# init
npx create-react-app ts-react-redux-practice --template=typescript

# redux 설치
yarn add redux react-redux @types/react-redux
```
* 모듈 설치시 typescript 지원하는지?
    * 라이브러리 github repo 열어서 ```index.d.ts``` 있는지 확인
    * 없다면 ```@types/``` 앞에 붙여서 설치하기

## 정리

* ducks pattern
    * 본래는 actions과 reducers 폴더가 나뉘어져 코드가 따로 작성되었음. 하지만 두개는 반드시 관련이 있기에 관리할 때 좀 불편함
    * actions와 reducer가 한 짝이 되어서 움직이기에 **actionTypes, actions, reducer를 한 곳으로 모아서 하나의 모듈로 관리하자**는 개념으로 등장

* ```payload``` : action에 부가적으로 필요한 값
    ```ts
    export const increaseBy = (diff: number) => ({
        type: INCREASE_BY,
        // action에 부가적으로 필요한 값을 보통 payload라고 함
        payload : diff
    })
    ```

* 예제
    * [modules](./src/modules)
        * [index.ts](./src/modules/index.ts) : 모든 reducer과 state를 모음
        * [counter.ts](./src/modules/counter.ts) : counter*에 관련한 state, reducer, action 모음 (ducks pattern)
    * [components](./src/components)
        * [Counter.tsx](./src/components/Counter.tsx) : 화면에 그려지는 컴포넌트; 외부에서 state, actions, reducer 받아옴
    * [containers](./src/containers)
        * [CounterContainer.tsx](./src/containers/CounterContainer.tsx) : dispatch 함수들 만들고, component(Counter.tsx)를 감쌈

* 예제2 : todo
    * [modules](./src/modules)
        * [index.ts](./src/modules/index.ts) : 모든 reducer과 state를 모음
        * [todos.ts](./src/modules/todos.ts) : todo 에 관련한 state, reducer, action 모음 (ducks pattern)
    * [components/Todo](./src/components/Todo) : 화면에 그려지는 컴포넌트 모음; 외부에서 state, actions, reducer 받아옴
        * [TodoList.tsx](./src/components/Todo/TodoList.tsx)
        * [TodoItem.tsx](./src/components/Todo/TodoItem.tsx)
        * [TodoInsert.tsx](./src/components/Todo/TodoInsert.tsx)
    * [containers](./src/containers)
        * [TodoApp.tsx](./src/containers/TodoApp.tsx) : dispatch 함수들 만들고, component(TodoList.tsx, TodoInsert.tsx)를 감쌈

## 참고
* [typescript에서 리덕스 프로처럼 사용하기](https://react.vlpt.us/using-typescript/05-ts-redux.html)