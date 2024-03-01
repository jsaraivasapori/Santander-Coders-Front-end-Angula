// Não alterar este código, a menos que haja uma boa justificativa.
export const enviarEmail = (addressee, subject, body) => {
  if (!addressee) {
    return {
      statuss: "Error",
      message: "Um destinatário precisa ser fornecido ao enviar um e-mail.",
    };
  }

  if (!subject) {
    return {
      statuss: "Error",
      message:
        "O campo de assunto não deveria estar vazio ao enviar um e-mail.",
    };
  }

  if (!body) {
    return {
      statuss: "Error",
      message: "O corpo da mensagem precisa ser fornecido ao enviar um e-mail.",
    };
  }

  console.log(
    `
        De: news@carstore.com
        Para: ${addressee}
        Assunto: ${subject}, aqui está sua newsletter
        
        ${body}
        
        CarStore - Aqui você encontra o seu carro novo
      `
  );

  return { status: "Sucess", message: "E-mail enviado com sucesso!" };
};

