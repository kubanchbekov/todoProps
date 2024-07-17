import React from "react";
import styled from "styled-components";
import Button from "./UI/Button";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  &:hover {
    background-color: #f9f9f9;
  }
`;

const TableHeader = styled.th`
  background-color: #f4f4f4;
  padding: 12px;
  text-align: left;
  font-weight: bold;
`;

const TableData = styled.td`
  padding: 12px;
  text-align: left;
  vertical-align: middle;
`;

const TodoImage = styled.img`
  max-width: 100px;
  height: auto;
  border-radius: 4px;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FavoriteIcon = styled.span`
  cursor: pointer;
  font-size: 24px;
  color: ${({ isFavorite }) => (isFavorite ? "red" : "gray")};
  &:hover {
    color: ${({ isFavorite }) => (isFavorite ? "darkred" : "black")};
  }
`;

const TodoList = ({ todo, deleteTodo, onToggleFavorite }) => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Title</TableHeader>
          <TableHeader>Date</TableHeader>
          <TableHeader>Foto</TableHeader>
          <TableHeader>Actions</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {todo?.map((item) => (
          <TableRow key={item.id}>
            <TableData>{item.title}</TableData>
            <TableData>{item.date}</TableData>
            <TableData>
              <TodoImage src={item.phote} alt={item.title} />
            </TableData>
            <TableData>
              <ActionContainer>
                <FavoriteIcon
                  isFavorite={item.isFavorite}
                  onClick={() => onToggleFavorite(item.id)}
                >
                  {item.isFavorite ? <BsBookmarkHeartFill /> : <BsBookmarkHeart />}
                </FavoriteIcon>
                <Button onClick={() => deleteTodo(item.id)}>Delete</Button>
              </ActionContainer>
            </TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default TodoList;
