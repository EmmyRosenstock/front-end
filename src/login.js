import React, { useState } from 'react';  
import axios from 'axios';  
import { useNavigate } from 'react-router-dom';  
  
function Login() {  
  const [email, setEmail] = useState('');  
  const [senha, setSenha] = useState('');  
  const [erro, setErro] = useState(null);  
  const [carregando, setCarregando] = useState(false);  
  const navigate = useNavigate();  
  
  const handleSubmit = async (event) => {  
   event.preventDefault();  
  
   if (!email || !senha) {  
    setErro('Por favor, insira email e senha');  
    return;  
   }  
  
   setCarregando(true);  
  
   try {  
    await axios.post('http://localhost:8080', {  
      email,  
      senha,  
    });  
    navigate('/dashboard');  
   } catch (error) {  
    setErro(error.message);  
   } finally {  
    setCarregando(false);  
   }  
  };  
  
  return (  
   <div>  
    <h1>Login</h1>  
    <form onSubmit={handleSubmit}>  
      <label htmlFor="email">Email:</label>  
      <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />  
      <label htmlFor="senha">Senha:</label>  
      <input type="password" id="senha" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} /><br /><br />  
      <input type="submit" value="Entrar" disabled={carregando} />  
      {carregando && <div>Carregando...</div>}  
      {erro && <div style={{ color: 'red' }}>{erro}</div>}  
    </form>  
   </div>  
  );  
}  
  
export default Login;