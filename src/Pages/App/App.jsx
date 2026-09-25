import './App.scss';

export default function ContadorJS() {
  let contador = 0;

  function incrementar(){
    contador += 1
    alert(contador)
  }

  function decrementar(){
    contador -= 1
    alert(contador)
  }
  return (
    <div className="App"> 
      <h1>CLIQUE EM ALGUM BOTÃO</h1>
      <div className="button">
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
      </div>
    </div>
  );
}
