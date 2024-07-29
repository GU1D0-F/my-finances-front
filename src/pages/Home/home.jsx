import ValuesDash from "../../components/ValuesDash/valuesDash";
import PieChart from "../../components/PieChart/pieChart";
import BarChart from "../../components/BarChart/barChart";
import { FaChartBar, FaChartPie } from "react-icons/fa";
import "./home.css";
import { useState } from "react";

const Home = () => {

    const [activeChart, setActiveChart] = useState("chart");
    const [date, setDate] = useState(new Date);

    return (
        <div className="home-container">
            <div className="home-buttons">
                <button className="btn btn-purple chart-btn" onClick={() => {
                    activeChart === 'pie' ?
                        setActiveChart('bar')
                        :
                        setActiveChart('pie')
                }}>
                    {activeChart === 'pie' ? <FaChartBar /> : <FaChartPie />}
                </button>
                <input type="month" id="data" className="input-date-home"
                    value={date}
                    onChange={(e) => setDate(e.target.value)} />
            </div>


            <ValuesDash />
            {activeChart == "pie" ?
                (<PieChart />)
                :
                (<BarChart />)
            }
        </div >
    )
}



export default Home;