const alunos = [
    {
        nome: 'André',
        nota:  5,
        turma: '1B',
    },
    {
        nome: 'Antônio',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Mário',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'Luis',
        nota: 4,
        turma: '2C',
    },

];

function func_alunos(vetroAlunos, media){
    let alunosAprov=[];

    for(let ind=0; ind < alunos.length; ind++){
        const {nota, nome} = vetroAlunos[ind];

        if(nota >= media){
            alunosAprov.push(nome);
        }
    }
    return(alunosAprov);
}

alert(func_alunos(alunos,6));