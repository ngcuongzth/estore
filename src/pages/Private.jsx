import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
const Private = ({ children }) => {
    const { user } = useSelector((state) => {
        return state.user;
    })

    return (
        <main>
            {user ? children : <Navigate to="/" />}
        </main>
    )
}


export default Private