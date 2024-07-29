import StatBox from "../../components/StatBox/statBox";
import { FaWallet, FaMoneyBillWave, FaMoneyCheckAlt, FaRegMoneyBillAlt } from 'react-icons/fa';
import "./valuesDash.css";


const ValueItem = ({ title, subtitle, progress, increase, icon }) => {
    return (
        <div className="row-container-home">
            <StatBox
                title={title}
                subtitle={subtitle}
                progress={progress}
                increase={increase}
                icon={icon}
            />
        </div>
    )
}

const ValuesDash = () => {
    return (
        <div className="grid-container-home">
            <ValueItem
                title={"R$ 5000"}
                subtitle="Saldo"
                progress="0.3"
                increase={"5%"}
                icon={
                    <FaWallet style={{ color: '#00cc00', fontSize: '26px' }} />
                }
            />
            <ValueItem
                title={"R$ 5000"}
                subtitle="Entrada"
                progress="0.3"
                increase={"5%"}
                icon={
                    <FaMoneyBillWave style={{ color: '#00cc00', fontSize: '26px' }} />
                }
            />
            <ValueItem
                title={"R$ 5000"}
                subtitle="Saida"
                progress="0.3"
                increase={"5%"}
                icon={
                    <FaRegMoneyBillAlt style={{ color: '#00cc00', fontSize: '26px' }} />
                }
            />
            <ValueItem
                title={"R$ 5000"}
                subtitle="Sobra do Mes"
                progress="0.3"
                increase={"5%"}
                icon={
                    <FaMoneyCheckAlt style={{ color: '#00cc00', fontSize: '26px' }} />
                }
            />
        </div>
    )
}

export default ValuesDash;