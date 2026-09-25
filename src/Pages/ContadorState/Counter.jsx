import './Counter.scss'
import { useState } from 'react';

export default function CounterState() {
    const [contador, setContador] = useState(0);

    function incrementar(){
        setContador(contador => contador + 1)

        if(contador >= 10){
            setContador(contador => contador - 1)

            alert("O contador não pode ser maior que 10.")
        }
    }

    function decrementar(){
        setContador(contador => contador - 1)

        if(contador <= 0){
            setContador(contador => contador + 1)

            alert("O contador não pode ser menor que 0.")
        }
    }

    return (
        <div className="App">
            <h1>CLIQUE EM ALGUM BOTÃO</h1>
            <div className="button">
                <h2>{contador}</h2>
                <button onClick={incrementar}>+</button>
                <button onClick={decrementar}>-</button>
            </div>
        </div>
    );
}