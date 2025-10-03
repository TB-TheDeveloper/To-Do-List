import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import type { Task } from './types';

interface TaskInputFieldProps {
  id?: number | undefined;
  placeholder: string;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  tasks?: Task[];
}
const TaskInputField: React.FC<TaskInputFieldProps> = ({
  id,
  placeholder,
  setTasks,
  tasks,
}) => {
  let taskToEdit = undefined;
  if (id) {
    taskToEdit = tasks?.find((task) => task.id === id)?.task;
  }
  const [newTask, setNewTask] = useState<string>(taskToEdit || '');

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '15px',
      }}
    >
      <Input
        className="add-task-input"
        placeholder={placeholder}
        style={{
          marginRight: 0,
          width: '80%',
          height: '36px',
        }}
        value={newTask}
        onChange={(_e, { value }) => {
          setNewTask(value);
        }}
      />
      <Button
        className="add-task-button"
        content="Add"
        color="green"
        onClick={() => {
          if (id) {
            setTasks((prev) =>
              prev.map((task) =>
                task.id === id ? { ...task, task: newTask } : task
              )
            );
          } else {
            setTasks((prev) => [
              ...prev,
              {
                id: prev.length + 1,
                task: newTask,
                created: new Date().toISOString().split('T')[0],
                completed: false,
              },
            ]);
          }
          setNewTask('');
        }}
        style={{ height: '36px', marginLeft: 0 }}
      />
    </div>
  );
};

export default TaskInputField;
