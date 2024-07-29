import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDespesa from "../../components/CardDespesa/cardDespesa";
import "./addSpendings.css"
import CardImportacao from "../../components/CardImportacao/cardImportacao";
import CardExportacao from "../../components/CardExportacao/cardExportacao";


const AddSpendings = () => {

    const { idUrl } = useParams();
    const [selected, setSelected] = useState("Add");

    const GetDadosDespesa = (id) => {
        // Faz o GET na API...

        // setValor(150);
        // setDescricao("Compras no mercado");
        // setCategoria("Mercado");
    }

    useEffect(() => {
        if (idUrl != "add") {
            GetDadosDespesa(idUrl);
        }
    }, []);


    return (
        <div className="container-despesa-cad">


            <div className="badge-container">
                <button onClick={() => setSelected("Add")} className="badge-btn">Adicionar</button>
                <button onClick={() => setSelected("Import")} className="badge-btn">Importar</button>
                <button onClick={() => setSelected("Export")} className="badge-btn">Exportar</button>
            </div>

            {
                selected === "Add" ? (<CardDespesa idUrl={idUrl} />) :
                    selected === "Import" ? (<CardImportacao />) :
                        (<CardExportacao />)
            }



        </div>
    );
}

export default AddSpendings;