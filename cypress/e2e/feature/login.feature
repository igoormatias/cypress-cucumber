Feature: Login
Funcionalide para realizar variados logins no sistema PHP Travels

  Scenario Outline: "<scenario>"
    Given eu acesse a página home da aplicação
    When eu inserir meu email "<email>" e senha "<password>"
    And clicar no botão entrar
    Then tenho meu acesso "<message>"

    Examples:
      | scenario          | email               | password | message                    |
      | Login com sucesso | user@phptravels.com | demouser | Login realizado com sucesso |
      | Login sem sucesso | Julio               |    12323 | Login com senha incorreta   |
