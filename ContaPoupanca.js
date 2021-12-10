import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{

    constructor(saldoIncial, cliente, agencia){
        super(saldoIncial, cliente, agencia)
    };
};