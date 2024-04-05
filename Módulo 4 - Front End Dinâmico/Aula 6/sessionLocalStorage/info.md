# Orientações

        1) Ao digitar a senha errada (comparação com o objeto), mostrar um prompt de
        login incorreto.

        2) Ao fazer o login corretamente redirecionar o usuário para a página
        ./pages/logged.html

        dica: window.location.href

        2-1) Ao fazer refresh/tentar entrar no index.html, caso o usuário estiver
        com uma sessão ativa e válida, redirecioná-lo para a página logged.html

        3) Ao clicar no botão logoff, o usuário deverá ter a sessão limpa e,
        as suas credenciais deverão estar salvas para facilitar o seu proximo login.
