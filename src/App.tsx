import React, { useState } from 'react';
import Modal from './components/Modal';

function App() {
  // fix the state of this `todos`
  const [todos, setTodos] = useState<string[]>([]);
  const [inputText, setInputText] = useState<string>('');
  // make components needed for TODO
  const TodoItem: React.FC<{ todo: string }> = ({ todo }) => {
    return <li>{todo}</li>;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputText.trim() !== '') {
      setTodos([...todos, inputText]);
      setInputText('');
    }
  };
  
  return (
    <>
      <ul>
        {
          // use `map` to render tasks from `todos`
          // remember about `keys` prop!
          todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} />
          ))
        }
      </ul>

      <form
        style={{
          marginTop: '10px',
        }}
        onSubmit={handleSubmit} // Add onSubmit handler to the form
      >
        <input
          value={inputText}
          onChange={handleInputChange} // Add onChange handler to the input
          placeholder="Enter task" // Provide a placeholder text for the input field
        />
        <button type="submit">Create Task</button>
      </form>

      <Modal />
    </>
  )
}

export default App
