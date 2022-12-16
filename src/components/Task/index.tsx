import {
  CheckCircle,
  CheckSquareOffset,
  PencilLine,
  Trash,
} from 'phosphor-react'
import { useState } from 'react'
import { Root, Indicator } from '@radix-ui/react-checkbox'

interface TaskProps {
  content: string
  onDeleteTask: (task: string) => void
}

export function Task({ content, onDeleteTask }: TaskProps) {
  const [check, setCheck] = useState(false)
  const [editTask, setEditTask] = useState(false)

  function handleDeleteComent() {
    onDeleteTask(content)
  }

  function HandleCheck() {
    setCheck(!check)
  }

  function HandleEditThisTask() {
    setEditTask(!editTask)
  }

  return (
    <div className="flex justify-between items-center bg-grayFive p-2  rounded">
      <div className="flex items-center justify-center gap-4">
        <Root
          className={`data-checked:bg-grayOne bg-grayFive w-6 h-6 rounded-full border-2 border-blue flex justify-center items-center`}
          onClick={HandleCheck}
        >
          <Indicator className="text-Purple">
            <CheckCircle size={30} weight="fill" />
          </Indicator>
        </Root>
        <p
          contentEditable={editTask}
          className={`outline-none ${
            check === true ? 'line-through text-grayThree' : ''
          }`}
        >
          {content}
        </p>
      </div>
      <div className="flex gap-2">
        <span className="hover:bg-grayFour p-1 rounded">
          <PencilLine
            cursor="pointer"
            onClick={HandleEditThisTask}
            size={16}
            className={`${editTask ? 'hidden' : ''} hover:text-green-500`}
          />
          <CheckSquareOffset
            cursor="pointer"
            onClick={HandleEditThisTask}
            size={16}
            weight="bold"
            className={`${editTask ? '' : 'hidden'} hover:text-green-500`}
          />
        </span>
        <span className="hover:bg-grayFour p-1 rounded">
          <Trash
            cursor="pointer"
            onClick={handleDeleteComent}
            size={16}
            className="hover:text-danger"
          />
        </span>
      </div>
    </div>
  )
}
