import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

export default function TaskForm({ addTask, editingTask }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(1);

  useEffect(() => {
    if (editingTask) {
      setName(editingTask.name);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
    }
  }, [editingTask]);

  const handleSaveTask = () => {
    if (name.trim() && description.trim()) {
      addTask({ name, description, priority, id: editingTask?.id || Date.now().toString() });
      setName('');
      setDescription('');
      setPriority(1);
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome da Tarefa"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />
      <Text style={styles.priorityLabel}>Importância</Text>
      <View style={styles.priorityContainer}>
        <TouchableOpacity
          style={[
            styles.priorityButton,
            priority === 1 && styles.priorityButtonSelected,
          ]}
          onPress={() => setPriority(1)}
        >
          <Text style={styles.priorityText}>Baixa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.priorityButton,
            priority === 2 && styles.priorityButtonSelected,
          ]}
          onPress={() => setPriority(2)}
        >
          <Text style={styles.priorityText}>Média</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.priorityButton,
            priority === 3 && styles.priorityButtonSelected,
          ]}
          onPress={() => setPriority(3)}
        >
          <Text style={styles.priorityText}>Alta</Text>
        </TouchableOpacity>
      </View>
      <Button
        title={editingTask ? 'Salvar Alterações' : 'Adicionar Tarefa'}
        onPress={handleSaveTask}
        color="#8A2BE2" // Lilás escuro
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D8BFD8', // Lilás claro
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  priorityLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#7D3C98',
  },
  priorityContainer: {
    marginBottom: 15,
  },
  priorityButton: {
    backgroundColor: '#E6E6FA',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 5,
  },
  priorityButtonSelected: {
    backgroundColor: '#9370DB',
  },
  priorityText: {
    color: '#4B0082',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
