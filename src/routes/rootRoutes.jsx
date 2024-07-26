import { useState } from "react";
import AuthRoutes from "./authRoutes";
import Navbar from "../components/Navbar/Navbar"
import RoutesApp from "./routesApp";
import CustomSideBar from "../components/CustomSideBar/CustomSideBar";


const RootRoutes = () => {
    // const { user, token } = useAuth();
    // const [isSidebar, setIsSidebar] = useState(true);
    const [token, setToken] = useState(true);
    const [total, setTotal] = useState(0);

    return (
        <>
            {
                token ?
                    (
                        <div className="app">
                            <CustomSideBar />
                            <main className="content">
                                <Navbar total={total} />
                                <RoutesApp />
                            </main>

                        </div>
                    )
                    :
                    <AuthRoutes />
            }
        </>
    )

}


export default RootRoutes;