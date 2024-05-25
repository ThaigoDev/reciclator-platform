import { Link } from "react-router-dom"
import "./Singup.page.css"; 

function SignUp() {
  return (
    <>
      <main className='content'>
        <section className="a1">
          <small>Seja Bem-vindo</small>
          <h1>
            Plataforma <br />  Reciclador Digital
          </h1>
        </section>
        <section className="a2">
          <form action="" className="Form-body">
            <h1 className="title-form">Criar Conta</h1>
            <input type="text" className="inputUserName" placeholder="Nome" required />
            <input type="email" className="inputUserEmail" placeholder="Email" required />
            <input type="password" className="inputPassword" placeholder="Password" required />
            <button type="button" className="btn">Criar Conta</button>
            <Link to="/">Login</Link>
          </form>
        </section>
      </main>
    </>
  )
}
export default SignUp; 