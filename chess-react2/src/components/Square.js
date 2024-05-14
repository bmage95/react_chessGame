import React from 'react';
import Piece from './Piece';

   const Square = ({ piece }) => {
     return (
       <div className="square">
         <Piece type={piece && piece.type} color={piece && piece.color} />
       </div>
     );
   };

export default Square;