import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    if (editingTask) {
      setTasks(tasks.map(t => (t.id === editingTask.id ? task : t)));
      setEditingTask(null);
    } else {
      setTasks([...tasks, { ...task, id: Date.now().toString() }]);
    }
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const sortTasks = (ascending = true) => {
    setTasks([...tasks].sort((a, b) =>
      ascending ? a.priority - b.priority : b.priority - a.priority
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciador de Tarefas</Text>
      <TaskForm addTask={addTask} editingTask={editingTask} />
      <TaskList
        tasks={tasks}
        editTask={editTask}
        deleteTask={deleteTask}
        sortTasks={sortTasks}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
