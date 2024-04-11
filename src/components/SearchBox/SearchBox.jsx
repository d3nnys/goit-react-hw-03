// import { useState } from 'react';

export default function SearchBar({ value, onFilter }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={event => onFilter(event.target.value)}
      />
    </div>
  );
}
