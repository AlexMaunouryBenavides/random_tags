import React, { useState } from 'react';

function Tags() {
	const [tags, setTags] = useState([]);
	const [randomTagDisplayed, setRandomTagDisplayed] = useState('');
	function getTags(e) {
		if (e.key !== 'Enter') return;
		const value = e.target.value;
		if (!value.trim()) return;
		setTags([...tags, value]);
		e.target.value = '';
	}
	function removeTag(index) {
		setTags(tags.filter((el, i) => i !== index));
	}
	function randomTag(tab) {
		let oneTag = Math.floor(Math.random() * tab.length);
		return tab[oneTag];
	}
	function displayTag() {
		const tagchosen = randomTag(tags);
		setRandomTagDisplayed(tagchosen);
	}
	function ResetTags() {
		setTags([]);
	}
	function resetRandom() {
		setRandomTagDisplayed('');
	}

	return (
		<>
			<div className="md:flex  justify-between md:max-w-[1000px] m-auto pt-[50px] px-10">
				<div>
					<div className="flex flex-col gap-5 ">
						<div className="flex gap-5">
							<label htmlFor="name" className="uppercase font-bold text-3xl text-[#F25F5C]">
								Vos elements
							</label>
							<button
								onClick={ResetTags}
								className="uppercase font-bold text-xl text-[#495867] bg-[#87C38F] p-2 rounded-lg">
								Reset Tags
							</button>
						</div>

						<input
							type="text"
							id="name"
							name="Vos elements"
							required
							minLength="2"
							maxLength="15"
							placeholder="ecrire ici ..."
							className="bg-gray-700 text-[#F25F5C] uppercase font-bold text-xl p-2"
							onKeyDown={getTags}
						/>
					</div>

					<div className="flex flex-wrap md:max-w-[300px]">
						{tags.map((tag, index) => {
							if (tag) {
								return (
									<div key={index} className="bg-gray-700 m-2 px-3 py-1 rounded-md text-[#87C38F]">
										<span className="font-bold uppercase"> {tag} </span>
										<span className="cursor-pointer" onClick={() => removeTag(index)}>
											❌
										</span>
									</div>
								);
							}
						})}
					</div>
				</div>

				<div className=" flex flex-col gap-5 md:border-l-[1px] mt-[10vh] md:mt-0 md:pl-5">
					<div className="flex md:gap-5">
						<h2 className="uppercase font-bold text-3xl text-[#F25F5C]">element random</h2>
						<button
							onClick={resetRandom}
							className="uppercase font-bold text-xl text-[#495867] bg-[#87C38F] p-2 rounded-lg ">
							Reset Random
						</button>
					</div>
					{randomTagDisplayed ? (
						<div className="bg-gray-700 text-[#3DA5D9] uppercase font-bold text-xl p-2 md:m-2 text-center">
							{randomTagDisplayed}
						</div>
					) : null}

					<button
						className="bg-gray-700 uppercase font-bold text-xl p-2 text-[#F25F5C]"
						onClick={displayTag}>
						Random
					</button>
				</div>
			</div>
		</>
	);
}

export default Tags;
