import React, { useState } from 'react';
import { Button, Table, TableHeader, TableHeaderCell } from 'semantic-ui-react';
import type { ModalEdit, Task } from './types';
import EditModal from './EditModal';
import TaskInputField from './TaskInputField';

const data: Task[] = [
  { id: 1, task: 'Example Task', created: '2024-01-01', completed: false },
  { id: 2, task: 'Another Task', created: '2024-01-02', completed: true },
];

export const defaultEditModal: ModalEdit = { open: false, id: undefined };

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(data);
  const [editModal, setEditModal] = useState<ModalEdit>(defaultEditModal);

  return (
    <>
      <h1>To-Do List</h1>
      <TaskInputField placeholder="Add Task..." setTasks={setTasks} />
      <Table celled className="table">
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
                  <Button
                    content="Edit"
                    color="blue"
                    onClick={() => setEditModal({ open: true, id: id })}
                  />
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
      <EditModal
        editModal={editModal}
        setEditModal={setEditModal}
        setTasks={setTasks}
        tasks={tasks}
      />
    </>
  );
};

export default App;
