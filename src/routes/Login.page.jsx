import './Login.pages.css'
import { Link } from "react-router-dom";
import Header from '../components/header.components';  


function Login() { 
   
    

    return (
        <>
            <Header></Header>
            <main className='content'>
                <section className="a1">
                    <small>Seja Bem-vindo</small>
                    <h1>
                        Plataforma <br />  Reciclador Digital
                    </h1>
                </section>
                <section className="a2">
                    <form action="" className="Form-body">
                        <h1 className="title-form">Login User</h1>
                        <input type="text" className="inputUserName" placeholder="Nome" required />
                        <input type="password" className="inputPassword" placeholder="Password" required />
                        <button type="button"   className="btn">Entrar</button>
                        <Link  to="/signup">Criar conta</Link>
                    </form>
                </section>
            </main> 
         
        </>
  
    )
}
export default Login; 