import React from 'react';

   const Piece = ({ type, color }) => {
     return type && color ? <div className={`piece ${color}-${type}`} /> : null;
   };

export default Piece;