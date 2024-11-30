import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    if (editingTask) {
      setTasks(tasks.map((t) => (t.id === editingTask.id ? task : t)));
      setEditingTask(null);
    } else {
      setTasks([...tasks, { ...task, id: Date.now().toString() }]);
    }
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const sortTasks = (ascending = true) => {
    const sortedTasks = [...tasks].sort((a, b) =>
      ascending ? a.priority - b.priority : b.priority - a.priority
    );
    setTasks(sortedTasks);
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={[styles.title, { marginTop: 20 }]}>Gerenciador de Tarefas</Text>
        <TaskForm addTask={addTask} editingTask={editingTask} />

        {/* Separador visual */}
        <View style={styles.divider} />
         <Text style={[styles.title, { marginBottom: 10 }]}>Tarefas Cadastradas</Text>

        <TaskList
          tasks={tasks}
          editTask={editTask}
          deleteTask={deleteTask}
          sortTasks={sortTasks}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6A0DAD',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#D8BFD8',
    marginVertical: 20,
  },
});
