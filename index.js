import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./contaPoupanca.js";
import { Conta } from "./Conta.js";
const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
const conta = new Conta(0, cliente1, 1001);

console.log(conta)