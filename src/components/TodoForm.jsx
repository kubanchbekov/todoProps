import React, { useState } from "react";
import styled from "styled-components";
import Input from "./UI/Input";
import Button from "./UI/Button";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
  font-size: 16px;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;;
  gap: 16px;
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TodoForm = ({addTodo}) => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [phote, setPhote] = useState("");
  const[error,setError]=useState(false)

  const handlerTitle = (e) => setTitle(e.target.value);
  const handlerDate = (e) => setDate(e.target.value);
  const handlerPhote = (e) => setPhote(e.target.value);
  

  const handlerSubmit = (e) => {
    e.preventDefault();
    addTodo({
        id:Math.floor(Math.random()*1000),
        title,
        date,
        phote,
        isFoforite:false
        
    })
    setDate('')
    setPhote('')
    setTitle('')

   };

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <Form onSubmit={handlerSubmit}>
      <Button onClick={toggleModal}>Add Book</Button>
      {modal && (
        <Modal>
          <Label>
            Title
            <Input  onChange={handlerTitle} value={title} placeholder="tekst" />
          </Label>
          <Label>
            Date
            <Input type="date" onChange={handlerDate} value={date} />
          </Label>
          <Label>
            Foto
            <Input type="url" onChange={handlerPhote} value={phote} placeholder='FOTO' />
          </Label>
          <Button type="submit">Add</Button>
          <Button onClick={toggleModal}>Close</Button>
        </Modal>
      )}
    </Form>
  );
};

export default TodoForm;
