export function criarCorpoEmail(cliente){
    const body = 
    `
    Olá, ${cliente}

Esperamos que esteja tendo uma ótima semana!

Como você visitou uma de nossas lojas da CarStore no último mês, gostaríamos de mantê-lo atualizado sobre nossos últimos veículos e ofertas especiais.

**Novos Veículos**
Temos o prazer de anunciar a chegada de alguns novos modelos em nossas lojas. O novo Sedan Luxo 2024, com seu design elegante e recursos de alta tecnologia, já está disponível para test drive. Além disso, o aguardado SUV Aventura 2024 também chegou, perfeito para todas as suas aventuras ao ar livre.

**Mais Vendidos**
Nossos clientes adoram o Compacto Cidade 2023 e o Esportivo Veloz 2023. Esses modelos continuam sendo nossos carros mais vendidos devido à sua combinação de estilo, desempenho e valor.

**Condições Especiais**
Para agradecer por ser um cliente valioso, estamos oferecendo condições especiais de financiamento para todos os nossos veículos. Você pode aproveitar as taxas de juros reduzidas e os prazos de pagamento flexíveis até o final deste mês.

Convidamos você a visitar nossa loja novamente para ver nossos novos veículos e discutir essas ofertas especiais com nossa equipe de vendas. Estamos ansiosos para ajudá-lo a encontrar o carro perfeito para você.

Atenciosamente,

Equipe CarStore
    `
    return body
}