import { PlusCircle } from "phosphor-react";
import { 
  AboutTheTasks, 
  Button, 
  Container, 
  FormContainer, 
  InputText, 
  MainContainer, 
  Paragraph, 
  TaskSection, 
  Span, 
  AlertSection
} from "./styles";

import Clipboard from '../../images/Clipboard.png'
import { Task } from "../Task";
import { useState ,FormEvent , ChangeEvent } from "react";

export function Main() {
  const [Tasks, setTasks] = useState<string[]>([])

  const [NewTask, setNewTask] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    
    setTasks([...Tasks, NewTask])

    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLFormElement>) {
    event.target.setCustomValidity('') 
    setNewTask(event.target.value)
  }

  function deleteComment(TaskToDelete: string) {
    const TasksWithoutDeleteOne = Tasks.filter(Task => {
        return Task !== TaskToDelete
    })

    setTasks(TasksWithoutDeleteOne)
}

  return(
    <MainContainer>
      <FormContainer onSubmit={handleCreateNewTask} onChange={handleNewTaskChange}>
        <InputText 
          placeholder="Adicione uma nova tarefa" 
          type="text"
          maxLength={50}
          required
        />
        <Button type="submit">Criar<PlusCircle/></Button>
      </FormContainer>

      <Container>
        <AboutTheTasks>
          <Paragraph color={'blue'} >Tarefas criadas <Span >0</Span></Paragraph>
          <Paragraph color={"purple"} >Concluídas <Span >0</Span></Paragraph>
        </AboutTheTasks>
        <TaskSection>

          { Tasks.map( task => {
            return (
              <Task
                content={task}
                onDeleteTask={deleteComment}
              />
            )
          })}

          <AlertSection>
            <img src={Clipboard} />
            <Paragraph display={'block'} width={"text"}>
              <strong>Você ainda não tem tarefas cadastradas</strong> Crie tarefas e organize seus itens a fazer
            </Paragraph>
          </AlertSection>
        </TaskSection>
      </Container>
    </MainContainer>
  )
}
