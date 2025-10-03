import React, { useState } from 'react';
import {
  Button,
  Input,
  Table,
  TableHeader,
  TableHeaderCell,
} from 'semantic-ui-react';
import type { Task } from './types';

const data: Task[] = [
  { id: 1, task: 'Example Task', created: '2024-01-01', completed: false },
  { id: 2, task: 'Another Task', created: '2024-01-02', completed: true },
];
const App: React.FC = () => {
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>(data);

  return (
    <>
      <h1>To-Do List</h1>
      <div style={{ marginTop: '20px' }}>
        <Input
          placeholder="Add Task..."
          style={{ marginRight: 0, marginBottom: '15px', width: '80%' }}
        />
        <Button content="Add" color="green" style={{ marginLeft: 0 }} />
      </div>
      <Table celled className="table1">
        <TableHeader>
          <Table.Row>
            <TableHeaderCell>Task</TableHeaderCell>
            <TableHeaderCell>Created</TableHeaderCell>
            <TableHeaderCell>Action</TableHeaderCell>
          </Table.Row>
        </TableHeader>
        <Table.Body>
          {tasks.map((task) => {
            const { id, task: taskName, created, completed } = task;
            return (
              <Table.Row key={id}>
                <Table.Cell className={completed ? 'completed-task' : ''}>
                  {taskName}
                </Table.Cell>
                <Table.Cell className={completed ? 'completed-task' : ''}>
                  {created}
                </Table.Cell>
                <Table.Cell>
                  <Button content="Edit" color="blue" />
                  <Button
                    content={completed ? 'Incompleted' : 'Complete'}
                    color="brown"
                    onClick={() => {
                      setTasks((prev) =>
                        prev.map((task) =>
                          task.id === id
                            ? { ...task, completed: !task.completed }
                            : task
                        )
                      );
                    }}
                  />
                  <Button
                    content="Delete"
                    color="red"
                    onClick={() => {
                      setTasks((prev) => prev.filter((task) => task.id !== id));
                    }}
                  />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};

export default App;
