import { Trash } from "phosphor-react";
import { Container, RadioItem, RadioRoot, TaskName } from "./styles";

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
      <RadioRoot>
        <RadioItem value="item-1" />
      </RadioRoot>
      <TaskName className="TaskName" >{ content }</TaskName>
      <Trash cursor='pointer' onClick={ handleDeleteComent }/>
    </Container>
  )
}