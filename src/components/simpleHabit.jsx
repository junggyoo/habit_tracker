import React, { useState } from "react";

function SimpleHabit() {
  // state가 변경될 때마다 코드블럭 안에 있는 코드들이 반복해서 실행된다.
  // 그리고 createRef는 계속 호출이 되면서 새로운 래퍼런스를 만들고 새로운 것을 할당하게 된다.
  // 그래서 이렇게 반복적으로 반들지 않기 위해서
  // 리액트 훅에서 제공하는 useRef()를 사용하면 한 번만 만들고 메모리에 저장해 놓고 다시 그것을 재사용한다.

  const [count, setCount] = useState(0);
  const spanRef = React.createRef();

  // 이 함수도 마찬가지이다. 이 컴포넌트가 호출될 때마다, 실행될 때마다 계속 새롭게 만들어지고
  // 아래 onClick에 계속 새로운 것이 할당된다.
  // 그래서 만약 자식 컴포넌트에게 props로 넘겨준다면 memo를 사용하더라도 계속 업데이트가 되는 사이드이펙트가 발생할 수 있다.
  // 이것을 방지할 때 useCallback()을 사용할 수 있다.
  // 컴포넌트가 반복 호출되어도 동일한 콜백함수를 전달한다.
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <li className="habit">
      <span className="habit-name" ref={spanRef}>
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
}

export default SimpleHabit;
