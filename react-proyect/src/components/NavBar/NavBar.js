import "../NavBar/NavBar.css"

const NavBar = () =>{
    return(
        <div className="NavBar">
            <div className="market">
                <h1>market</h1>
                <input></input>
                
            </div>
            <div className="button">
                <button>Cafe</button>
                <button>Lacteos</button>
                <button>Azucres</button>
            </div>
        </div>
    )
}
export default NavBar;