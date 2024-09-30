let campoOrcamento;
let campoMarca;
let campoPerfume;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de Perfumes");
  createSpan("Quanto você pode gastar R$");
  campoOrcamento = createInput("5000");
  campoMarca = createCheckbox("Gosta de perfumes mais caros?");
  campoPerfume = createCheckbox("Gosta de perfumes?");
}

function draw() {
  background("pink");
  let orcamento = parseFloat(campoOrcamento.value());
  let gostaDeMarca = campoMarca.checked();
  let gostaDePerfume = campoPerfume.checked();
  let recomendacao = geraRecomendacao(orcamento, gostaDeMarca, gostaDePerfume);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(18);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(orcamento, gostaDeMarca, gostaDePerfume) {
  if (orcamento >= 5000) {
    if (gostaDeMarca) {
      return "Tom Ford - ótimo para quem gosta de se sentir como as estrelas de hollywood...";
    } else if (gostaDePerfume) {
      return "Chanel - perfeito para quem busca algo charmoso.";
    } else {
      return "Dior - ideal para quem gosta de grandes marcas.";
    }
  } else if (orcamento >= 1000) {
    if (gostaDeMarca) {
      return "Lancôme Paris - excelente para quem quer um perfume suave para o dia a dia, mas com luxo.";
    } else if (gostaDePerfume) {
      return "Calvin Klein - para quem adora um visual elegante e moderno, com o cheiro das últimas tendências.";
    } else {
      return "Dolce e Gabbana - um símbolo de elegância e beleza que concerteza te conquistarão.";
    }
  } else {
    if (gostaDeMarca) {
      return "Guerlain - uma fragrância sustentada pelo sucesso, que realça matérias-primas excepcionais.";
    } else if (gostaDePerfume) {
      return "Carolina Herrera - o equilíbrio perfeito entre conforto e frescor.";
    } else {
      return "Paco Rabanne - a fragrância adiciona um toque equilibrado de canela e especiarias.";
    }
  }
}