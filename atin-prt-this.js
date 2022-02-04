function calculaIdade(anos) {
    return (`Daqui a ${anos} anos, ${this.nome} terá ${this.idade+anos} anos de idade`);
}

const pessoa1 ={
    mome: 'Maria',
    idade: 30,
};

const pessoa2 ={
    mome: 'Carla',
    idade: 26,
};

const animal ={
    mome: 'Fiona',
    idade: 5,
    raca: 'Pug',
};

alert(calculaIdade.call(pessoa2, 30));
//console.log(calculaIdade.call(pessoa2, 30));

alert(calculaIdade.apply(animal, [4]));
//console.log(calculaIdade.apply(animal, [4]));