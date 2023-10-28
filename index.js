function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nomeHeroi = "Felipão da Programação";
    let nivel ;
    
    if (saldoVitorias < 10) {
      nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
  
    console.log("O Herói " + nomeHeroi + " tem um saldo de Vitórias de " + saldoVitorias + " e está no nível de " + nivel + " Acabou de entrar no Server");
  }
  
  // Exemplo de uso:
  calcularNivel(110, 4) ;