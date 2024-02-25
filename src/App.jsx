import { useState } from 'react';
import { useReducer } from 'react';
import './App.css';
import { useRef } from 'react';
import More from './More';

function App() {
  function add(name) {
    return { id: Date.now(), name: name, toggle: true };
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'AddPost':
        return [...state, add(action.payload.name)];
      case 'Toggle':
        return state.map((state) => {
          if (state.id === action.payload.id) {
            return { ...state, toggle: !state.toggle };
          } else {
            return state;
          }
        });
    }
  };

  const [value, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');
  const inputRef = useRef()

  const submit = (e) => {
    e.preventDefault();
    dispatch({ type: 'AddPost', payload: { name: name } });
    setName('');
  };

  const change = (e) => {
    setName(e.target.value);
  };

  function focus(){
    inputRef.current.focus()
  }
  return (
    <div>
      <form onSubmit={submit}>
        <input ref={inputRef} type="text" value={name} onChange={(e) => change(e)}/>
        <button type="submit">Add</button>
      </form>
      

      {
        value.map((element)=>{
          return <More key={element.id} post={element} dispatch={dispatch} />
        })
      }

    

      <button onClick={focus}>GO BACK</button>
    </div>
  );
}

export default App;