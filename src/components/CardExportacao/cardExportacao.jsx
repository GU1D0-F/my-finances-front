import React, { useState, useEffect } from "react";
import { FcClock } from "react-icons/fc";
import { FaPaperclip } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
import { RxDownload } from "react-icons/rx";
import "./cardExportacao.css";


const CardExportacao = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [reportExport, setReportExport] = useState(null);
    const [status, setStatus] = useState(null);
    const [canDownload, setCanDownload] = useState(false);

    useEffect(() => {
        // Get();
        handleStatus(30);
        setReportExport(1);
        const intervalId = setInterval(Get, 6000);
        return () => clearInterval(intervalId);
    }, []);

    const Get = async () => {
        // const request = await api.get("/Export/exportacao?type=10");

        // if (request.status === 204) {
        //     setReportExport(null);
        //     return;
        // }

        // setReportExport(request.data);
        // handleStatus(request.data.status);
    };

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

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const downloadFile = async () => {
        setCanDownload(false);
        // try {
        //     var response = await api.get("/Export/file/exportacao/" + reportExport.id, {
        //         responseType: "blob",
        //     });

        //     const blob = new Blob([response.data], {
        //         type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        //     });
        //     const url = URL.createObjectURL(blob);
        //     window.open(url);
        // } catch (err) {
        //     console.log(err);
        // }
        setCanDownload(true);
    };

    const handleGenerateClick = async () => {
        setIsLoading(true);
        // const request = await api.post("/Export/exportacao", {
        //     type: 10,
        // });
        // setReportExport(request.data[0]);
        // handleStatus(request.data[0].status);
        setIsLoading(false);
    };

    return (
        <div className="box-despesa-cad">
            <div className="grid-container-exportacao">
                <div className="grid-item">
                    <div className="info-box">
                        <span className="icon"><FcClock /></span>
                        <div>
                            <h4>Ultima Exportacao</h4>
                            <p>{formatDate(new Date)}</p>
                            {/* <p>{reportExport != null ? formatDate(reportExport.startTime) : "-"}</p> */}
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="info-box">
                        <button
                            className="generate-button"
                            disabled={isLoading}
                            onClick={handleGenerateClick}
                        >
                            <FaPlayCircle />
                        </button>
                        <div>
                            <h4>Gerar Arquivo</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="status-box">
                {reportExport != null ? (
                    <>
                        <span className="icon"><FaPaperclip /></span>
                        <div>
                            Spending Exportation
                            <p style={{ color: status.color }}>{status.message}</p>
                        </div>
                        <button
                            className="download-button"
                            onClick={downloadFile}
                            disabled={!canDownload}
                        >
                            <RxDownload />
                        </button>
                    </>
                ) : (
                    <p>Sem Arquivo</p>
                )}
            </div>
        </div>
    );

}

export default CardExportacao;