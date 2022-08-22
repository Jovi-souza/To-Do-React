import { Trash } from "phosphor-react";
import { Container, TaskName } from "./styles";

interface TaskProps {
  content: string
  onDeleteTask: ( task: string ) => void
}

export function Task({ content, onDeleteTask}:TaskProps ) {

  function handleDeleteComent() {
    onDeleteTask( content )
  }

  return(
    <Container>
      <input 
        id='check'
        maxLength={50}
        type="checkbox"
      />
      <label htmlFor="check"></label>
      <TaskName>{ content }</TaskName>
      <Trash cursor='pointer' onClick={ handleDeleteComent }/>
    </Container>
  )
}