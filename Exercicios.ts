// Exercício 1
let cidade: string = 'São Paulo';
    console.log(cidade);

// Exercício 2
interface Celular {
    marca: string;
    ano: number;
    cor: string;
    android: boolean;
}
let meuCelular: Celular = { marca: "Motorola", ano: 2022, cor: "Preto", android: true };
    console.log(`Celular da marca ${meuCelular.marca} e do ano ${meuCelular.ano}.`);

//Exercício 3
interface Animal {
    emitirSom(): string;
}
let gato: Animal = {
    emitirSom() {
        return "Miau";
    }
};
    console.log(gato.emitirSom());

// Exercício 4
type VerificarIdade = (idade: number) => boolean;
let verificarMaioridade21: VerificarIdade = (idade) => idade > 21;
    console.log(verificarMaioridade21(18));
    console.log(verificarMaioridade21(22));

// Exercício 5
function saudacao(nome: string, sobrenome?: string): string {
    if (sobrenome) {
        return `Olá, ${nome} ${sobrenome}! Bem-vindo(a)!`;
    } else {
        return `Olá, ${nome}! Bem-vindo(a)!`;
    }
}

console.log(saudacao('Maria'));
console.log(saudacao('João', 'Caetano'));
