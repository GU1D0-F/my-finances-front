import { Route, Routes } from "react-router-dom";
import Signin from "../pages/SignIn/signIn";

const AuthRoutes = () => {

    return (
        <Routes>
            <Route path="*" element={<Signin />} />
        </Routes>
    );
}

export default AuthRoutes;