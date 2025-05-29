// AlunosService.js
import AsyncStorage from '@react-native-async-storage/async-storage';
async function listar() {
const jsonValue = await AsyncStorage.getItem('@alunos');
return jsonValue != null ? JSON.parse(jsonValue) : [];
}
async function salvar(aluno) {
aluno.id = new Date().getTime();
const alunos = await listar();
alunos.push(aluno);
await AsyncStorage.setItem('@alunos', JSON.stringify(alunos));
}
async function buscar(id) {
const alunos = await listar();
return alunos.find(aluno => aluno.id === id);
}

async function remover(id) {
    const alunos = await listar();
    const novaLista = alunos.filter(aluno => aluno.id !== id);
    await AsyncStorage.setItem('@alunos', JSON.stringify(novaLista));
    }
    async function atualizar(novoAluno) {
    const alunos = await listar();
    const novaLista = alunos.map(aluno => aluno.id === novoAluno.id ? novoAluno : aluno);
    await AsyncStorage.setItem('@alunos', JSON.stringify(novaLista));
    }
    export default {
    listar,
    salvar,
    buscar,
    atualizar,
    remover
    }