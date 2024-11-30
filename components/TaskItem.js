import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TaskItem({ task, editTask, deleteTask }) {
  return (
    <View style={styles.taskContainer}>
      <View>
        <Text style={styles.taskName}>{task.name}</Text>
        <Text style={styles.taskDescription}>{task.description}</Text>
        <Text style={styles.taskPriority}>Prioridade: {task.priority}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Editar"
          onPress={() => editTask(task)}
          color="#9370DB" // Tom de lilás
        />
        <Button
          title="Excluir"
          onPress={() => deleteTask(task.id)}
          color="#8A2BE2" // Tom de lilás mais escuro
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#F8F0FF', // Fundo lilás claro
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D8BFD8', // Borda lilás claro
  },
  taskName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B0082', // Lilás escuro
  },
  taskDescription: {
    fontSize: 14,
    color: '#4B0082', // Lilás escuro
  },
  taskPriority: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#7D3C98',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
