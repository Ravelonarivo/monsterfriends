import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--purple bg-white'
				type='search'
				placeholder='search monsters'
				onChange={ searchChange }
			/>
		</div>
	);
};

export default SearchBox;