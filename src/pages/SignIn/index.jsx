import React, { useState } from 'react';
import "./style.css"

const Signin = () => {

    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false); 

    const handleLogin = async () => {
        if (!email || !senha) {
            setError("Preencha todos os campos");
            return;
        }

        setIsLoading(true);
        // const res = await signin(email, senha);
        setIsLoading(false);

        // if (res) {
        //     setError(res);
        // }
    };

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
        setError("");
    };

    return (
        <div className="centered-container">
            <div className={`container ${isSignUp ? 'active' : ''}`}>
                <div className="form-container sign-up">
                    <form>
                        <h1 className='title-in-white'>Inscrever-se</h1>
                        <input type="text" placeholder="Nome" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Senha" />
                        {/* <button>Inscrever-se</button> */}
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form>
                        <h1 className='title-in-white'>Entrar</h1>
                        <input type="email" placeholder="Email" onChange={(e) => [setEmail(e.target.value), setError("")]}/>
                        <input type="password" placeholder="Senha" onChange={(e) => [setSenha(e.target.value), setError("")]}/>
                        <label style={errorStyles}>{error}</label>
                        {/* <a href="#">Esqueceu sua senha ?</a> */}
                        <button onClick={handleLogin} disabled={isLoading}>{isLoading ? "Carregando..." : "Entrar"}</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Bem vindo de volta!</h1>
                            <p>Insira seus dados pessoais para usar todos os recursos do site</p>
                            <button className="hidden" onClick={toggleSignUp}>Entrar</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Olá amigo!</h1>
                            <p>Registre-se com seus dados pessoais para usar todos os recursos do site</p>
                            <button className="hidden" onClick={toggleSignUp}>Inscrever-se</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


const errorStyles = {
    fontSize: "12px",
    color: "red",
};

export default Signin;