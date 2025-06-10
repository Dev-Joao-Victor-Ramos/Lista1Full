// Função principal para executar os exercícios
function executarExercicio(n) {
    switch(n) {
        case 1:
            // Exercício 1: Soma de dois números
            let a = Number(prompt("Digite o primeiro número:"));
            let b = Number(prompt("Digite o segundo número:"));
            alert("A soma é: " + (a + b));
            break;

        case 2:
            // Exercício 2: Nome completo
            let nome = prompt("Digite seu nome:");
            let sobrenome = prompt("Digite seu sobrenome:");
            alert("Olá, " + nome + " " + sobrenome);
            break;

        case 3:
            // Exercício 3: Conversão Real para Dólar
            let reais = Number(prompt("Valor em reais:"));
            alert("Em dólares: $" + (reais / 5.25).toFixed(2));
            break;

        case 4:
            // Exercício 4: Antecessor e sucessor
            let num = Number(prompt("Número inteiro:"));
            alert("Antecessor: " + (num - 1) + ", Sucessor: " + (num + 1));
            break;

        case 5:
            // Exercício 5: Cálculo de área e valor
            let largura = Number(prompt("Largura (m):"));
            let comprimento = Number(prompt("Comprimento (m):"));
            let preco = Number(prompt("Valor por m²:"));
            let area = largura * comprimento;
            alert(`Área: ${area}m², Valor: R$${(area * preco).toFixed(2)}`);
            break;

        case 6:
            // Exercício 6: Consumo de combustível
            let km = Number(prompt("Distância (km):"));
            let litros = Number(prompt("Combustível (litros):"));
            alert("Consumo médio: " + (km / litros).toFixed(2) + " km/l");
            break;

        case 7:
            // Exercício 7: Média de notas
            let notas = [];
            for (let i = 1; i <= 4; i++) {
                notas.push(Number(prompt(`Nota ${i}:`)));
            }
            let media = notas.reduce((soma, n) => soma + n, 0) / 4;
            alert("Média: " + media.toFixed(2));
            break;

        case 8:
            // Exercício 8: Conversão Fahrenheit para Celsius
            let f = Number(prompt("Temperatura em Fahrenheit:"));
            let c = (f - 32) * 5 / 9;
            alert("Celsius: " + c.toFixed(2) + "°C");
            break;

        default:
            alert("Exercício inválido!");
    }
}