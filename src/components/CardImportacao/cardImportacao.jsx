import { useState, useCallback, useEffect } from "react";
import { useDropzone } from 'react-dropzone';
import { FcClock } from "react-icons/fc";
import { FaPaperclip } from "react-icons/fa6";
import "./cardImportacao.css";



const CardImportacao = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [reportExport, setReportExport] = useState(null);
    const [status, setStatus] = useState(null);
    const [canDownload, setCanDownload] = useState(false);

    useEffect(() => {
        handleStatus(30);
        setReportExport(1);
    }, [])

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            // Aqui você pode processar o arquivo conforme necessário
            console.log('Arquivo lido com sucesso:', file.name);
            alert('Arquivo importado com sucesso: ' + file.name);
        };

        reader.readAsArrayBuffer(file);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: '.xls, .xlsx'
    });

    function formatDate(dataOriginal) {
        const data = new Date(dataOriginal);
        const dia = data.getDate().toString().padStart(2, "0");
        const mes = (data.getMonth() + 1).toString().padStart(2, "0");
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    function handleStatus(status) {
        let statusObject = {};

        switch (status) {
            case 30:
                setIsLoading(false);
                setCanDownload(true);
                statusObject = {
                    message: "Completed",
                    color: "green",
                };
                break;
            case 100:
                setIsLoading(false);
                setCanDownload(false);
                statusObject = {
                    message: "Error",
                    color: "red",
                };
                break;
            case 200:
                setIsLoading(false);
                setCanDownload(false);
                statusObject = {
                    message: "Empty",
                    color: "yellow",
                };
                break;
            case 10:
                setIsLoading(true);
                setCanDownload(false);
                statusObject = {
                    message: "Processing",
                    color: "orange",
                };
                break;
            case 0:
                setIsLoading(true);
                setCanDownload(false);
                statusObject = {
                    message: "Processing",
                    color: "orange",
                };
                break;
            default:
                setIsLoading(false);
                setCanDownload(false);
                statusObject = {
                    message: "-",
                    color: "white",
                };
                break;
        }

        setStatus(statusObject);
    }


    return (
        <div className="box-despesa-cad">
            <div className="info-box">
                <span className="icon"><FcClock /></span>
                <div>
                    <h4>Ultima Importacao</h4>
                    <p>{formatDate(new Date)}</p>
                    {/* <p>{reportExport != null ? formatDate(reportExport.startTime) : "-"}</p> */}
                </div>
            </div>

            <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <p>Arraste e solte um arquivo XLS aqui, ou clique para selecionar o arquivo</p>
            </div>

            <div className="status-box">
                {reportExport != null ? (
                    <>
                        <span className="icon"><FaPaperclip /></span>
                        <div>
                            Spending Importation
                            <p style={{ color: status.color }}>Concluido</p>
                            {/* <p style={{ color: status.color }}>{status.message}</p> */}
                        </div>
                    </>
                ) : (
                    <p>Sem Arquivo</p>
                )}
            </div>

        </div>
    )
}



export default CardImportacao;