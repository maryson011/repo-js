class DesafioEstatico {
  nota: number = 1000; // não alterar essa linha

  static executar() {
    // Imprimir o valor de nota no console
    const n = new DesafioEstatico().nota;
    console.log(n);
  }
}

DesafioEstatico.executar()