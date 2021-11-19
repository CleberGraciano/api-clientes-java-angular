export class Cliente {
    id: number;
    nome: string;
    cpf: string;
    dataCadastro: string;

    constructor(
        id: number,
        nome: string,
        cpf: string,
        dataCadastro: string,
    ){
        this.id = id;
        this.nome = nome;
        this.cpf=cpf;
        this.dataCadastro=dataCadastro;
    }
}