import { Link } from "react-router-dom"; 
export default function Header() {
  return (
    <header className="header">
        <div className="logo"> 
        logo
            <img src={""} alt="" />
        </div>  
        <nav className = "links"> 
          <Link to = "/">Home</Link>     
          <Link to = "/product">Products</Link>    
          <Link to = "/dashboard">Dashboard</Link>    
          <Link to = "/signup">Criar conta</Link>    
        
        </nav>

    </header>
  )   
}