import React from 'react';
import { Modal } from 'semantic-ui-react';
import TaskInputField from './TaskInputField';
import type { ModalEdit, Task } from './types';
import { defaultEditModal } from './App';

interface EditModalProps {
  editModal: ModalEdit;
  setEditModal: React.Dispatch<React.SetStateAction<ModalEdit>>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  tasks: Task[];
}
const EditModal: React.FC<EditModalProps> = ({
  editModal,
  setEditModal,
  setTasks,
  tasks,
}) => {
  return (
    <Modal
      open={editModal.open}
      size="small"
      closeOnTriggerBlur={false}
      closeIcon
      onClose={() => {
        setEditModal(defaultEditModal);
      }}
    >
      <Modal.Header>Edit Task</Modal.Header>
      <Modal.Content>
        <TaskInputField
          placeholder="Edit Task..."
          id={editModal.id}
          setTasks={setTasks}
          tasks={tasks}
        />
      </Modal.Content>
    </Modal>
  );
};

export default EditModal;
