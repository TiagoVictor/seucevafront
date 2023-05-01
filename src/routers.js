import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';

export default function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Inicio />} />
			</Routes>
		</Router>
	);
}
