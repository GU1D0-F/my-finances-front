import { useState } from "react";
import { VictoryChart, VictoryBar, VictoryTheme } from 'victory';
import "./barChart.css"


const BarChart = () => {

    const [pieChart, setPieChart] = useState({
        periodo: "",
        totalEntrada: 0,
        totalSaida: 0,
        entradas: [{ categoria: "", valor: 0, procentagem: 0.0, x: 0, y: 0, label: "" }],
        saidas: [{ categoria: "", valor: 0, procentagem: 0.0, x: 0, y: 0, label: "" }],
    })


    return (
        <div className="bar-container">
            <div className="bar-box">
                <VictoryChart
                    theme={VictoryTheme.material}
                >
                    <VictoryBar
                        style={{
                            data: { fill: "green" },
                            labels: { fill: 'white' }
                        }}
                        barRatio={5}
                        data={pieChart.entradas.map((item) => {
                            let x = item.categoria;
                            let y = item.valor
                            let label = item.porcentagem != undefined ? item.porcentagem.toFixed(2).toString() + " %" : "";

                            return { x, y, label }
                        })}
                    />
                </VictoryChart>
                <h4 className="bar-box-title">Entradas - R$ 5000</h4>
            </div>
            <div className="bar-box">
                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={{ x: 50 }}
                    width={1000}
                    minDomain={{ x: 0 }}
                >

                    <VictoryBar
                        minDomain={{ y: 0 }}
                        barRatio={0.8}
                        style={{
                            data: { fill: "#c43a31" },
                            labels: { fill: 'white' }
                        }}
                        data={pieChart.saidas.map((item) => {
                            let x = item.categoria;
                            let y = item.valor * -1
                            let label = item.porcentagem != undefined ? item.porcentagem.toFixed(2).toString() + " %" : "";

                            return { x, y, label }
                        })}
                    />
                </VictoryChart>
                <h4 className="bar-box-title">Gastos - R$ 8000</h4>
            </div>
        </div>
    );
}


export default BarChart;