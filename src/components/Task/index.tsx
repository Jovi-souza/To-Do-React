import { Trash } from "phosphor-react";
import { Container, TaskName } from "./styles";

interface PropsTask {
  content: string 
  onDeleteTask: (task: string) => void
}

export function Task({ content, onDeleteTask }: PropsTask ) {

  function handleDeletetask( ) {
    onDeleteTask(content)
  }
  return(
    <Container>
      <input 
        id='check' 
        maxLength={50} 
        type="checkbox"
      />
      <label htmlFor="check"></label>
      <TaskName>{content}</TaskName>
      <Trash cursor='pointer' onClick={handleDeletetask} />
    </Container>
  )
}