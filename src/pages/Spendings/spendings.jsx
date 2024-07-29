import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import icons from "../../styles/icons"
import "./spendings.css"
import { FaFilter } from 'react-icons/fa';
import Pagination from "../../components/Pagination/pagination";

let PageSize = 10;

const Spendings = () => {

    let dados = [
        { id: 1, data: '26/07/2024', icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-carro.png", categoria: "Carro", descricao: "Pagamento IPVA", valor: 2500 },
        { id: 2, data: '26/07/2024', icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-casa.png", categoria: "Casa", descricao: "Condomínio", valor: 620 },
        { id: 3, data: '26/07/2024', icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-lazer.png", categoria: "Lazer", descricao: "Sorvete no parque", valor: 17.50 },
        { id: 4, data: '26/07/2024', icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png", categoria: "Mercado", descricao: "Compras Walmart", valor: 375 },
        { id: 5, data: '26/07/2024', icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-treinamento.png", categoria: "Educação", descricao: "Faculdade", valor: 490 },
        { id: 6, data: '26/07/2024', icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png", categoria: "Viagem", descricao: "Passagem Aérea", valor: 610 },
        { id: 7, data: '26/07/2024', icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png", categoria: "Mercado", descricao: "Compras Churrasco", valor: 144.30 },
        { id: 8, data: '26/07/2024', icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png", categoria: "Viagem", descricao: "Hotel", valor: 330 },
    ];

    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return dados.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    const handleFilterClick = () => {
        // Ação a ser executada ao clicar no botão de filtro
        console.log('Filtro clicado');
        // Você pode adicionar a lógica para abrir um modal de filtro, por exemplo.
    };

    const OpenDepesa = (id) => {
        navigate("/spendings/" + id);
    }

    return (
        <div className="container-home">
            <div className="title-home">
                <div className="right-buttons">
                    <h1>Despesas</h1>
                    <button onClick={handleFilterClick} className="btn btn-filter">
                        <FaFilter />
                    </button>

                </div>

                <button
                    onClick={() => navigate("/spendings/add")}
                    className="btn btn-green"
                >
                    Adicionar Despesa
                </button>
            </div>


            <div className="box-despesa">
                <table>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Descrição</th>
                            <th>Categoria</th>
                            <th className="text-center">Valor</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTableData.map((desp, i) => (
                            <tr key={i}>
                                <td>{desp.data}</td>
                                <td>{desp.descricao}</td>
                                <td>{desp.categoria}</td>

                                <td className="text-right">
                                    {/*Futuramente cor da caixa devera mudar de acordo com o TipoTransacao*/}
                                    <div className="box" style={{ backgroundColor: '#ff1744' }}>
                                        <span className="typography" style={{ color: '#fff' }}>
                                            R$ {desp.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                        </span>
                                    </div>
                                </td>

                                <td className="text-right">
                                    <button onClick={() => OpenDepesa(desp.id)} className="btn btn-purple">
                                        <img className="icon-sm" src={icons.edit} alt="Edit" />
                                    </button>
                                    <button onClick={() => DeleteDespesa(desp.id)} className="btn btn-red ml-10">
                                        <img className="icon-sm" src={icons.remove} alt="Remove" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={dados.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>

        </div>
    )
}


export default Spendings;