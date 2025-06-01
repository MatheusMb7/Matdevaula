import AsyncStorage from '@react-native-async-storage/async-storage';

async function listar() {
  const data = await AsyncStorage.getItem('@treinos');
  return data ? JSON.parse(data) : [];
}

async function salvar(treino) {
  treino.id = new Date().getTime();
  const lista = await listar();
  lista.push(treino);
  await AsyncStorage.setItem('@treinos', JSON.stringify(lista));
}

async function atualizar(treino) {
  const lista = await listar();
  const novaLista = lista.map(t => t.id === treino.id ? treino : t);
  await AsyncStorage.setItem('@treinos', JSON.stringify(novaLista));
}

async function remover(id) {
  const lista = await listar();
  const novaLista = lista.filter(t => t.id !== id);
  await AsyncStorage.setItem('@treinos', JSON.stringify(novaLista));
}

export default { listar, salvar, atualizar, remover };
