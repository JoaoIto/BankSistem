export class Conta {
  constructor(saldoIncial, cliente, agencia) {
    console.log(this.constructor)
    if(this.constructor == Conta){
        throw new Error("Não pode instanciar este tipo de classe!")
    }
    this._saldo = saldoIncial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  sacar(valor) {
    let taxa = 1;
    return this._sacar(valor, taxa);
  }
  _sacar(valor, taxa){
    const valorSac = taxa * valor;
    if (this._saldo >= valorSac){
        this._saldo -= valorSac;
        return valorSac;
    };
    return 0;
};

  depositar(valor) {
    this._saldo += valor;
  };

  tranferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
