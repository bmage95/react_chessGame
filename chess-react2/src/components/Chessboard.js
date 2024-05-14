import React from 'react';
   import Square from './Square';

   const Chessboard = ({ board }) => {
     return (
       <div className="chessboard">
         {board.map((row, rowIndex) => (
           <div key={rowIndex} className="board-row">
             {row.map((piece, colIndex) => (
               <Square key={colIndex} piece={piece} />
             ))}
           </div>
         ))}
       </div>
     );
   };

export default Chessboard;