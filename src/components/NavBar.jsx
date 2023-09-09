import {BrowserRouter as Router, Routes, Route, Link} from "react-dom"



export default function NavBar() {
  return (
    <>
      <header>
        <h1>Ur Pantry Ur Way</h1>
      </header>
 <Link to={'/'}></Link>
 <Link to={'/'}>
            Northwest <span>Animal Hospital</span>
            </Link>
    </>
  );
}
