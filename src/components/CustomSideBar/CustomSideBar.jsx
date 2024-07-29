import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CustomSideBar.css";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { TiThMenu } from "react-icons/ti";
import { FaHome, FaCalendarAlt } from "react-icons/fa";
import { GiExitDoor } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import icons from "../../styles/icons.js";

const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
        <MenuItem
            active={selected === title}
            onClick={() => setSelected(title)}
            icon={icon}
            component={<Link to={to} />}
        >
            {title}
        </MenuItem>
    );
};

const CustomSideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selected, setSelected] = useState("Dashboard");

    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{ display: 'flex', height: `${height}px`, backgroundColor: '#43434A' }}>
            <Sidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <TiThMenu /> : (<img src={icons.logo} className="icon-image" />)}
                        style={{
                            margin: "10px 0 20px 0",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                    </MenuItem>

                    <Item
                        title="Dashboard"
                        to="/"
                        icon={<FaHome />}
                        selected={selected}
                        setSelected={setSelected}
                    />

                    <Item
                        title="Spendings"
                        to="/spendings"
                        icon={<GrMoney />}
                        selected={selected}
                        setSelected={setSelected}
                    />

                    <Item
                        title="Calendar"
                        to="/calendar"
                        icon={<FaCalendarAlt />}
                        selected={selected}
                        setSelected={setSelected}
                    />

                    {!isCollapsed ?
                        (<div className="exit-container">
                            <MenuItem
                                icon={<GiExitDoor />}
                                onClick={() => {
                                    // signout()
                                }}
                            >
                                Sair
                            </MenuItem>
                        </div>)
                        :
                        (<div>
                            <MenuItem
                                icon={<GiExitDoor />}
                                onClick={() => {
                                    // signout()
                                }}
                            />
                        </div>)}
                </Menu>
            </Sidebar>
        </div>
    );
};

export default CustomSideBar;
