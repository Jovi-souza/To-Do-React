import { Trash } from "phosphor-react";
import { Container, TaskName } from "./styles";

interface TaskProps {
  id: string
  content: string
  onDeleteTask: ( task: string ) => void
}

export function Task({ id, content, onDeleteTask}:TaskProps ) {

  function handleDeleteComent() {
    onDeleteTask( content )
  }

  return(
    <Container>
      <input 
        id={id}
        type="checkbox"
      />
      <label htmlFor={id}></label>
      <TaskName className="TaskName" >{ content }</TaskName>
      <Trash cursor='pointer' onClick={ handleDeleteComent }/>
    </Container>
  )
}