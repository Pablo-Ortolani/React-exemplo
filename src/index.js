import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//Elemento
/* Usando JSX, escevendo codigo HTML de forma mais prática. */
const elemento1 = (
  <div>
    <h2>Olá DevPleno!</h2>
  </div>
);
/* Sem usar JSX */
//const elemento2 = React.createElement('div', null, React.createElement('h2',null,'Olá DevPleno!'));

//Componentes
/* É um conjunto de elementos. */
function App(props) {
  /* Para trabahar com consts que precisam mudar o valor
  na dom é necessário usar o conceito de hooks (UseState),
  dessa forma é possível atualizar os valores na interface.
  hooks cria uma ancora (unidade de memoria) fora do JS
  para que o valor do componente possa ser atualizado 
  na interface depois de uma alteração de valor. Toda vez que
  o valor de "i" for alterado ele recarrega o componente (a functions) na tela.
  OBS: Os Hooks devem ser criados sempre no inicio d componente (Function) e não
  podem ficar dentro de uma condição "if, case" para acorrecer sua existencia.
  */
  const [i, setI] = useState(1);

  const incremet = () => {
    setI(i + 1);
  };

  return (
    <div className="App">
      <h1>
        Hello {props.name} {i}
      </h1>
      <button onClick={incremet}>Incrementar</button>
      <h2>Start editing to see some magic happen!</h2>
      {elemento1}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="DevPleno" />, rootElement);
