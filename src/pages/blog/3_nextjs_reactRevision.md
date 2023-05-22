---
layout: "../../layouts/BlogPost.astro"
title: "Next.js / React Revision"
description: "Next.js: Reactの復習をする。"
pubDate: "May 22 2023"
tags: [Tech, Next.js, note, React]
---

## What is React? and why React?

- React is a JavaScript library for building user interfaces.

![](images/howReactGood.png)

### バニラJS VS react

- Reactのコンポーネント→コードの再利用が可能！
- 可読性も高い
- メンテナンス性も高い
- テストもしやすい
- パフォーマンスも良い
- 他のライブラリとの組み合わせもしやすい
[JavaScript]

``` javascript
const button = document.querySelector('button');

let modal;
let backdrop;

button.addEventListener('click', showModalHandler);

function showModalHandler() {
  if (modal) {
    return;
  }

  modal = document.createElement('div');
  modal.className = 'modal';

  const modalText = document.createElement('p');
  modalText.textContent = 'Are you sure?';

  const modalCancelAction = document.createElement('button');
  modalCancelAction.textContent = 'Cancel';
  modalCancelAction.className = 'btn btn--alt';
  modalCancelAction.addEventListener('click', closeModalHandler);

  const modalConfirmAction = document.createElement('button');
  modalConfirmAction.textContent = 'Confirm';
  modalConfirmAction.className = 'btn';
  modalConfirmAction.addEventListener('click', closeModalHandler);

  modal.append(modalText);
  modal.append(modalCancelAction);
  modal.append(modalConfirmAction);

  document.body.append(modal);

  backdrop = document.createElement('div');
  backdrop.className = 'backdrop';

  backdrop.addEventListener('click', closeModalHandler);

  document.body.append(backdrop);
}

function closeModalHandler() {
  modal.remove();
  modal = null;

  backdrop.remove();
  backdrop = null;
}
```

[React- index.js]

``` javascript
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

[React- App.js]

``` javascript
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' />
    </div>
  );
}

export default App;
```

[React- Todo.js]

``` javascript
import { useState } from 'react';

import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={showModalHandler}>
          Delete
        </button>
      </div>
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && <Modal text='Are you sure?' onClose={closeModalHandler} />}
    </div>
  );
}

export default Todo;
```

---

### Building Single-Page-Applications(SPAs)

- React can be used to **control parts** of HTML pages or entire pages.
  - <font color="red">"Widget"</font> approach on a multi-page-application
  - (some) pages are still **rendered on and served by a backend server**.

- React can also be used to control the entire frontend of a web application.
  - <font color="red">"Single-Page-Application"(SPA)</font>  approach. Server o**nly sends one HTML page**, thereafter, React takes over and controls the UI

---

## What is "State"?

> Note
>
> You can take it literally
> It is the "Current State" of your application.

- State is a JavaScript object that holds data which influences the user interface.
- State is the data which is **manipulated** and **reflected** by your running program(= by the user interface).
