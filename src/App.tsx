import { useState } from "react"

interface InfoAlunoProps { //criando um objeto Aluno com todas propriedades de um aluno
    nome: string;
    idade: string;
    sobrenome:string;
    email:string;
}



export default function App() {
     //criando o useState, que é um texto que começou vazio
    const [input, setInput] = useState("")//pegamos a palavra descrita no input
    const [inputSobrenome, setInputSobrenome] = useState ("")
    const [inputIdade, setInputIdade] = useState ("")
    const [inputEmail, setInputEmail] = useState("")

    const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>()

    const [contador, setContador] = useState(0)

    
 
    //criamos sempre 2 elementos o input que acessa o valor e o setInput para  trocar o valor ali dentro
    function mostrarAluno () {
        
        setInfoAluno({
            nome:input,
            sobrenome:inputSobrenome,
            idade:inputIdade,
            email:inputEmail
        })
    }
    function aumentar() {
        if(contador>=10){
            return
        }
        setContador(valorAtual => valorAtual +1)
    }
    function diminuir() {
        if(contador ===0){
            return
        }
        setContador(valorAtual => valorAtual -1)
    }
    return(
        <div>
            <h1>Conhecendo UseState</h1>

            <input type="text"
            placeholder="digite seu nome"
            value={input}  //value está atrelado ao valor que terá na useState
            onChange={ (e) => setInput(e.target.value)}
            //ele irá replicar o q for digitado no campo do input colocando dentro do useState d forma dinamica
            />
            <br />
            <br />
            <input type="text"
            placeholder="digite seu sobrenome"
            value={inputSobrenome}
            onChange={(e) => setInputSobrenome(e.target.value)}
            />
            <br /><br />
            <input type="text"
            placeholder="seu email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            />
            <br /><br />
            <input type="text"
            placeholder="idade"
            value={inputIdade}
            onChange={(e) => setInputIdade(e.target.value)}
            />
            <br /><br />
            <button onClick={mostrarAluno}>Mostrar Aluno</button>
            <hr />
            <h3>Bem-vindo: {infoAluno?.nome}</h3>
            <h3>Sobrenome: {infoAluno?.sobrenome}</h3>
            <h3>Email:{infoAluno?.email}</h3>
            <h3>Idade: {infoAluno?.idade}</h3>

            <hr />
            <br />
            <h1>Contador com useState</h1>
            <button onClick={aumentar}>+</button>{contador}<button onClick={diminuir}>-</button>
        </div>
    )
}
