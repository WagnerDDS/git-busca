# Projeto proposto no desafio técnico Compasso Uol

Os componentes foram agrupados na pasta COMPONENTS, sendo eles:
- BarraBusca = renderiza o campo de busca e o botão de busca
- MostraPerfil = renderiza o perfil buscado
- MostraRepos = exibe uma lista dos repositórios do usuário selecionado
- MostraStarred = exime uma lista dos starred repos do usuário selecionado

Para os testes, utilizamos o arquivo Testes.test.js que se encontra na pasta TESTES
Utilizamos a própria react-test-library para fazê-lo.
Incluimos dois testes bem simples:
- Confirmar que o botão de busca aparece assim que o componente é renderizado
- Confirmar que existe uma mensagem padrão auxiliando o usuário no que pode ser digitado no campo de busca.
