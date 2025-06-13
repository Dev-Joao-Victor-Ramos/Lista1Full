function executarExercicio(n) {
    switch (n) {
      case 1:
        let a = Number(prompt("Digite o primeiro número:"));
        let b = Number(prompt("Digite o segundo número:"));
        alert(`A soma é: ${a + b}`);
        break;
  
      case 2:
        let nome = prompt("Digite seu nome:");
        let sobrenome = prompt("Digite seu sobrenome:");
        alert(`Olá, ${nome} ${sobrenome}!`);
        break;
  
      case 3:
        let reais = Number(prompt("Digite o valor em reais:"));
        let dolar = (reais / 5.25).toFixed(2);
        alert(`Valor em dólares: US$ ${dolar}`);
        break;
  
      case 4:
        let num = Number(prompt("Digite um número inteiro:"));
        alert(`Antecessor: ${num - 1}\nSucessor: ${num + 1}`);
        break;
  
      case 5:
        let largura = Number(prompt("Largura do terreno (em metros):"));
        let comprimento = Number(prompt("Comprimento do terreno (em metros):"));
        let preco = Number(prompt("Preço por metro quadrado (R$):"));
        let area = largura * comprimento;
        let valor = area * preco;
        alert(`Área total: ${area} m²\nValor do terreno: R$ ${valor.toFixed(2)}`);
        break;
  
      case 6:
        let distancia = Number(prompt("Distância percorrida (km):"));
        let combustivel = Number(prompt("Combustível gasto (litros):"));
        let consumo = (distancia / combustivel).toFixed(2);
        alert(`Consumo médio: ${consumo} km/l`);
        break;
  
      case 7:
        let notas = [];
        for (let i = 1; i <= 4; i++) {
          notas.push(Number(prompt(`Digite a nota ${i}:`)));
        }
        let media = (notas.reduce((total, nota) => total + nota, 0) / notas.length).toFixed(2);
        alert(`Média das notas: ${media}`);
        break;
  
      case 8:
        let f = Number(prompt("Digite a temperatura em Fahrenheit:"));
        let c = ((f - 32) * 5 / 9).toFixed(2);
        alert(`Temperatura em Celsius: ${c} °C`);
        break;
  
      default:
        alert("Exercício inválido.");
    }
  }
  