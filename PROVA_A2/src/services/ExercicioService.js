import AsyncStorage from '@react-native-async-storage/async-storage';

async function listar() {
  const data = await AsyncStorage.getItem('@exercicios');
  return data ? JSON.parse(data) : [];
}

async function salvar(exercicio) {
  exercicio.id = new Date().getTime();
  const lista = await listar();
  lista.push(exercicio);
  await AsyncStorage.setItem('@exercicios', JSON.stringify(lista));
}

async function atualizar(exercicio) {
  const lista = await listar();
  const novaLista = lista.map(e => e.id === exercicio.id ? exercicio : e);
  await AsyncStorage.setItem('@exercicios', JSON.stringify(novaLista));
}

async function remover(id) {
  const lista = await listar();
  const novaLista = lista.filter(e => e.id !== id);
  await AsyncStorage.setItem('@exercicios', JSON.stringify(novaLista));
}

export default { listar, salvar, atualizar, remover };
