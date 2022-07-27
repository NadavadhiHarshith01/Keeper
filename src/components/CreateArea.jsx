import React, { useState } from "react";
import Note from "./Note";

function CreateArea(props) {
  const [Content, setFullNote] = useState({
    title: "",
    content: ""
  });

  function onAdd(event) {
    //Destructruing
    const { name, value } = event.target;
    setFullNote((previousValue) => {
      return {
        ...previousValue,
        [name]: value
      };
    });
  }

  const [array, setArrayList] = useState([]);

  function addToList(event) {
    setArrayList((previousValue) => {
      return [...previousValue, Content];
    });
    setFullNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function deleteItem(id) {
    setArrayList((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={onAdd}
          name="title"
          value={Content.title}
          placeholder="Title"
        />
        <textarea
          onChange={onAdd}
          name="content"
          value={Content.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={addToList}>
          <span>Add</span>
        </button>
      </form>
      <div>
        {array.map((item, index) => (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onChecked={deleteItem}
          />
        ))}
      </div>
    </div>
  );
}

export default CreateArea;
