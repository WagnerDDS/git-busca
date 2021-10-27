import BarraBusca from "../components/BarraBusca";
import { render, screen } from "@testing-library/react";

describe("Componente botão de busca", () => {
  test("a botão de busca deve estar presente inicialmente", () => {
    render(<BarraBusca></BarraBusca>);
    const mycomp = screen.getByText("Buscar Usuário");
    expect(mycomp).toBeInTheDocument();
    screen.debug();
  });

  test("o campo de pesquisa deve exibir uma mensagem para o usuário: digite um nome de usuário do GitHub", () => {
    render(<BarraBusca></BarraBusca>);
    const mymessage = screen.getByPlaceholderText(
      "digite um nome de usuário do GitHub"
    );
    expect(mymessage).toBeInTheDocument();
  });
});
