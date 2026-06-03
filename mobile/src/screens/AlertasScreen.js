import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function AlertasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Meus Alertas</Text>
      <Text style={styles.subtitle}>Configure seus alertas de cotação</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Alertas Configurados</Text>
        <Text style={styles.emptyState}>Nenhum alerta configurado ainda</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 12,
  },
  emptyState: {
    fontSize: 14,
    color: '#94a3b8',
    textAlign: 'center',
    paddingVertical: 20,
  },
});
