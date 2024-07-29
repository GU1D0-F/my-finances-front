import { useState } from "react";
import { VictoryPie } from 'victory';
import "./pieChart.css";

const PieChart = () => {

    const [pieChart, setPieChart] = useState({
        periodo: "",
        totalEntrada: 0,
        totalSaida: 0,
        entradas: [{ categoria: "", valor: 0, procentagem: 0.0, x: 0, y: 0, label: "" }],
        saidas: [{ categoria: "", valor: 0, procentagem: 0.0, x: 0, y: 0, label: "" }],
    })

    return (
        <div className="pie-container">
            <div className="pie-box">
                <h4 className="pie-box-title">Entradas - R$ 5000</h4>
                <VictoryPie
                    events={[{
                        target: "data",
                        eventHandlers: {
                            onClick: () => {
                                return [
                                    {
                                        target: "data",
                                        mutation: ({ style }) => {
                                            return style.fill === "#c43a31" ? null : { style: { fill: "#c43a31" } };
                                        }
                                    }, {
                                        target: "labels",
                                        mutation: ({ text }) => {
                                            let r = pieChart.entradas.find(x => x.label === text);
                                            if (r === undefined) {
                                                let regex = /\d+/;
                                                let valor = text.match(regex)[0];
                                                let valorNum = parseFloat(valor);
                                                r = pieChart.entradas.find(x => x.x === valorNum);
                                                return { text: r.label }
                                            }
                                            return { text: `R$ ${r.x} / ${r.y.toFixed(0).toString()}%` };
                                        }
                                    }
                                ];
                            }
                        }
                    }]}
                    // data={pieChart.entradas}
                    style={{ labels: { fill: 'white' } }}
                />
            </div>

            <div className="pie-box">
                <h4 className="pie-box-title">Gastos - R$ 8000</h4>
                <VictoryPie
                    events={[{
                        target: "data",
                        eventHandlers: {
                            onClick: () => {
                                return [
                                    {
                                        target: "data",
                                        mutation: ({ style }) => {
                                            return style.fill === "#c43a31" ? null : { style: { fill: "#c43a31" } };
                                        }
                                    }, {
                                        target: "labels",
                                        mutation: ({ text }) => {
                                            let r = pieChart.saidas.find(x => x.label === text);
                                            if (r === undefined) {
                                                let regex = /-?\d+\.\d+/;
                                                let valorNegativo = text.match(regex)[0];
                                                let valorNegativoNum = parseFloat(valorNegativo);
                                                r = pieChart.saidas.find(x => x.x === valorNegativoNum);
                                                return { text: r.label }
                                            }
                                            return { text: `R$ ${r.x} / ${r.y.toFixed(2).toString()}%` };
                                        }
                                    }
                                ];
                            }
                        }
                    }]}
                    // data={pieChart.saidas}
                    style={{ labels: { fill: 'white' } }}
                />
            </div>
        </div>

    )
}

export default PieChart;