import { Link } from "react-router-dom"

const Header = () =>{
    return(
    <>
    <div class="head">
      <div class="left">
        <h3>Logo</h3>
        </div>
        <div class="right">
            <ul>
                <li><Link to ="/Home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </div>
    </div>
    </>
    )
  }
  export default Header