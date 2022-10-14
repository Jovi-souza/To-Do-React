import { Check } from "phosphor-react";
import { useState, useContext } from "react";
import { CheckContext } from "../../context/checkedContext";
import { Container, CheckIndicator, CheckRoot, TaskName, TrashIcon } from "./styles";

interface TaskProps {
  content: string
  onDeleteTask: ( task: string ) => void
}

export function Task({ content, onDeleteTask }:TaskProps ) {
  const { checked, isChecked } = useContext(CheckContext)
  function handleDeleteComent() {
    onDeleteTask( content )
  }

  function HandleChecked() {
    isChecked()
  }

  return(
    <Container>
       <CheckRoot onClick={HandleChecked}>
        <CheckIndicator>
          {
            checked === 'checked' && <Check size={12} weight="bold" color="white" /> 
          }
        </CheckIndicator>
      </CheckRoot>
      <TaskName className="TaskName" isChecked={ checked === 'checked' ? 'unchecked' : 'checked' } >{ content }</TaskName>
      <TrashIcon cursor='pointer' onClick={ handleDeleteComent }/>
    </Container>
  )
}