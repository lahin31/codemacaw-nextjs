---
title: "Prevent unnecessary re-rendering when using Context API"
date: "November 21, 2021"
excerpt: "In this post we are going to prevent an unnecessary re-rendering when using Context API. Context API is great but we need to be aware of some limitations, this post we will understand one of the limitation which is unnecessary re-rendering of Child Components."
---

In this post we are going to prevent an unnecessary re-rendering when using Context API. Context API is great but we need to be aware of some limitations, this post we will understand one of the limitation which is unnecessary re-rendering of Child Components.

Lets write our App component,

```js
import { useState } from "react";
import CounterContext from "./CounterContext";
import Navbar from "./components/Navbar";
import Child from "./components/Child";
import MidChild from "./components/MidChild";

function App() {
  const [count, setCount] = useState(0);

  const incCount = () => setCount((prev) => prev + 1);
  const decCount = () => setCount((prev) => prev - 1);

  const counterObj = {
    count,
    incCount,
    decCount,
  };

  return (
    <CounterContext.Provider value={counterObj}>
      <Navbar />
      <Child />
      <MidChild />
    </CounterContext.Provider>
  );
}

export default App;
```

The App component provides the CounterContext to each of its child component. And our CounterContext file,

```js
import { createContext } from "react";

const CounterContext = createContext({
  count: 0,
  incCount: () => {},
  decCount: () => {},
});

export default CounterContext;
```

Our Navbar component is just a simple component,

```js
import { useContext } from "react";
import CounterContext from "../CounterContext";

const Navbar = () => {
  const context = useContext(CounterContext);
  return (
    <div className="navbar-wrapper">
      <h1>Count value: {context.count}</h1>
    </div>
  );
};

export default Navbar;
```

Child and MidChild components are also similar.

```js
import { useContext } from "react";
import CounterContext from "../CounterContext";

const Child = () => {
  const context = useContext(CounterContext);
  return (
    <div className="child-wrapper">
      <h1>This is child</h1>
      <button onClick={context.incCount}>Increment</button>
    </div>
  );
};

export default Child;
```

```js
const MidChild = () => {
  console.log("mid child re rendered");
  return (
    <div className="mid-child-wrapper">
      <h2>This is mid child</h2>
    </div>
  );
};

export default MidChild;
```

The MidChild is simple a component which logs a message each time it re-renders.

Now if we run our application we will see,
