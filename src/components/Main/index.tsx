import { PlusCircle } from 'phosphor-react'
import { useState, FormEvent, ChangeEvent } from 'react'
import { Task } from '../Task'

import Clipboard from '../../images/Clipboard.png'

export function Main() {
  const [Tasks, setTasks] = useState<string[]>([])

  const [NewTask, setNewTask] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    const doesThisTaskExist = Tasks.find((task) => task === NewTask)
    if (doesThisTaskExist) {
      setNewTask('')
      return alert('tarefa já existente')
    }
    setNewTask('')

    setTasks([...Tasks, NewTask])
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')

    setNewTask(event.target.value)
  }

  function handleDeleteTask(taskToDelet: string) {
    const taskWithoutDeleteOne = Tasks.filter((task) => {
      return task !== taskToDelet
    })

    setTasks(taskWithoutDeleteOne)
  }

  const numberOfTasks = Tasks.length

  return (
    <div className="w-full max-w-xl px-4 flex flex-col">
      <form onSubmit={handleCreateNewTask} className="-mt-6 mb-6 flex gap-4">
        <input
          placeholder="Adicione uma nova tarefa"
          type="text"
          value={NewTask}
          onChange={handleNewTaskChange}
          maxLength={50}
          required
          className="w-full bg-grayFive px-4 rounded border-none outline-none focus:outline-PurpleDark text-grayTwo placeholder:text-grayThree"
        />
        <button
          type="submit"
          className="flex gap-2 px-4 py-2 items-center rounded text-white bg-blueDark"
        >
          Criar <PlusCircle size={16} weight="bold" />
        </button>
      </form>
      <div className="text-grayOne">
        <div className="flex justify-between mb-8">
          <p className="text-blue">
            Tarefas criadas
            <span className="ml-2 text-grayOne bg-grayFour px-2 py-1  rounded-full">
              {numberOfTasks}
            </span>
          </p>
          <p className="text-Purple">
            Concluídas
            <span className="ml-2 text-grayOne bg-grayFour px-2 py-1 rounded-full">
              0 de {numberOfTasks}
            </span>
          </p>
        </div>
        <div>
          {Tasks.map((task) => {
            return (
              <Task content={task} onDeleteTask={handleDeleteTask} key={task} />
            )
          })}
        </div>
        <div
          className={`${
            Tasks.length ? 'hidden' : 'flex'
          } flex-col items-center gap-12 mt-12`}
        >
          <img src={Clipboard} alt="" className="w-16" />
          <p className="text-grayTwo text-center">
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      </div>
    </div>
  )
}
