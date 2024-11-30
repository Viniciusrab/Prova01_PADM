import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, editTask, deleteTask, sortTasks }) {
  return (
    <View style={styles.listContainer}>
      <View style={styles.sortButtons}>
        <Button
          title="Prioridade ↑"
          onPress={() => sortTasks(true)}
          color="#9370DB"
        />
        <Button
          title="Prioridade ↓"
          onPress={() => sortTasks(false)}
          color="#9370DB"
        />
      </View>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <Text style={styles.noTasks}>Nenhuma tarefa adicionada.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 20,
  },
  sortButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  noTasks: {
    textAlign: 'center',
    fontSize: 16,
    color: '#4B0082',
    marginTop: 20,
  },
});
