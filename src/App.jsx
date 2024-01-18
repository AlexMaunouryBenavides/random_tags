import Tags from './Components/Tags';

function App() {
	function getInputContent(e) {
		const inputContent = e.target.value;
	}
	return (
		<div className=" min-h-screen bg-[#495867]  text-center py-5 font-bold uppercase text-[#4cdada] text-[28px] ">
			<h2>Crée votre liste d'element puis choisissez en un aléatoirement</h2>
			<Tags />
		</div>
	);
}

export default App;
