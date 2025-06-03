import { Route, Routes } from "react-router-dom"

const InstaRoutes = ({ routes }) => {
    return <Routes>
        {routes.map(({ route, element }, idx) => (
            <Route key={idx} path={route} element={element} />
        ))}
    </Routes>
}

export default InstaRoutes;