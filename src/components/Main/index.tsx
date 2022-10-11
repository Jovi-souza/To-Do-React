import { PlusCircle } from "phosphor-react";
import { useState ,FormEvent, ChangeEvent } from "react";
import { Task } from "../Task";

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


export function Main() {
  const [Tasks, setTasks] = useState<string[]>([])
  
  const [NewTask, setNewTask] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...Tasks, NewTask])
    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')

    setNewTask(event.target.value)
  }

  function handleDeleteTask( taskToDelet: string) {

    const taskWithoutDeleteOne = Tasks.filter( task => {
      return task !== taskToDelet
    })

    setTasks(taskWithoutDeleteOne)
  }
  let numberOfTasks = Tasks.length
  const hasTask = numberOfTasks ? 'true' : 'false'

  return(
    <MainContainer>
      <FormContainer onSubmit={handleCreateNewTask}>
        <InputText 
          placeholder="Adicione uma nova tarefa" 
          type="text"
          value={NewTask}
          onChange={handleNewTaskChange}
          maxLength={50}
          required
        />
        <Button type="submit">Criar <PlusCircle className="PlusCicle"/> </Button>
      </FormContainer>

      <Container>
        <AboutTheTasks>
          <Paragraph color={"blue"} >Tarefas criadas <Span >{ numberOfTasks }</Span></Paragraph>
          <Paragraph color={"purple"} >Concluídas <Span > 0 de {numberOfTasks} </Span></Paragraph>
        </AboutTheTasks>
        <TaskSection>
          { Tasks.map( task => {
              return (
                <Task
                  content={task}
                  onDeleteTask={handleDeleteTask}
                  key={task}
                />
              )
          })}
        </TaskSection>
        <AlertSection hasTask={ hasTask }>
          <img src={Clipboard} />
          <Paragraph display={'block'} width={"text"}>
            <strong>Você ainda não tem tarefas cadastradas</strong> Crie tarefas e organize seus itens a fazer
          </Paragraph>
        </AlertSection>
      </Container>
    </MainContainer>
  )
}
