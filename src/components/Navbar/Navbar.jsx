import "./Navbar.css";

const Navbar = (props) => {
    return <div className="navbar">
        <div className="dashboard">
            {
                props.total != null && <>
                <div>Total de Gastos</div>
                <div>R$ {props.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                </>
            }
        </div>
    </div>
}

export default Navbar;