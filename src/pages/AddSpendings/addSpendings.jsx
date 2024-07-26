import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdCloudDownload } from "react-icons/md";
import "./addSpendings.css"


const AddSpendings = () => {

    const { idUrl } = useParams();
    const navigate = useNavigate();
    const [valor, setValor] = useState(0);
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [date, setDate] = useState(null);

    const SalvarDados = () => {
        console.log(date);
    }

    const GetDadosDespesa = (id) => {
        // Faz o GET na API...

        setValor(150);
        setDescricao("Compras no mercado");
        setCategoria("Mercado");
    }

    useEffect(() => {
        if (idUrl != "add") {
            GetDadosDespesa(idUrl);
        }
    }, []);


    return (
        <div className="container-despesa-cad">
            

            <div className="badge-container">
                <button className="badge-btn">Adicionar</button>
                <button className="badge-btn">Importar</button>
                <button className="badge-btn">Exportar</button>
            </div>

            <div className="box-despesa-cad">
                {
                    idUrl == "add" ? <h1>Nova Despesa</h1> : <h1>Editar Despesa</h1>
                }

                <div className="input-group">
                    <p>Data</p>
                    <input type="date" className="w100" id="data"
                        value={date}
                        onChange={(e) => setDate(e.target.value)} />
                </div>

                <div className="input-group">
                    <p>Valor</p>
                    <input type="number" className="input-lg w100" id="valor"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)} />
                </div>

                <div className="input-group">
                    <p>Descricao</p>
                    <input type="text" className="w100" id="valor"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)} />
                </div>

                <div className="input-group">
                    <p>Categoria</p>
                    <select id="categoria" className="w100"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}>
                        <option value="Carro">Carro</option>
                        <option value="Casa">Casa</option>
                        <option value="Lazer">Lazer</option>
                        <option value="Mercado">Mercado</option>
                        <option value="Educação">Educação</option>
                        <option value="Viagem">Viagem</option>
                    </select>
                </div>



                <div className="btn-group text-right">
                    <button onClick={() => navigate("/")} className="btn btn-blue-outline ml-20">Cancelar</button>
                    <button onClick={SalvarDados} className="btn btn-blue ml-20">Salvar</button>
                </div>
            </div>
        </div>
    );
}

export default AddSpendings;