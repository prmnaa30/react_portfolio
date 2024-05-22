import { BrowserRouter } from "react-router-dom";

import { About, Navbar } from "./components";
import { Hero } from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-background font-[Inter] text-text'>
				<div className=''>
					<Navbar />
					<Hero />
				</div>
				<About />
			</div>
		</BrowserRouter>
	);
};

export default App;
