import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setinputValue] = useState('');
  const lol = [];

  const onImputChange = (event) => {
    setinputValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    // setCategories(categories => [inputValue, ...categories]); //importante callback, sino no podemos definir nada que nos llegue de fuera
    onNewCategory( inputValue.trim() );
    setinputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar GIFS"
        value={inputValue}
        onChange={onImputChange}
      />
    </form>

  )
}
