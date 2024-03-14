import React, { useState } from 'react'
import './Game.css';
import clickSoundAsset from '../sounds/click.wav';
function Game() {
    const [box,setBox]= useState([
        ["","","",],
        ["","","",],
        ["","","",]
    ]);
    const color=(variable) => {
        if(variable==='X') return 'xc'
    }
    const [win,setwin]= useState('');
    const clickSound = new Audio(clickSoundAsset);

  const playClickSound = () => {
    clickSound.currentTime = 0;
    clickSound.play();
  };
    const check=()=>{
        if(box[0][0]!=null&&box[0][0]===box[0][1]&&box[0][1]===box[0][2])
        {setwin(box[0][0] );}
        if(box[1][0]!=null&&box[1][0]===box[1][1]&&box[1][1]===box[1][2])
        {setwin(box[1][0]);}
        if(box[2][0]!=null&&box[2][0]===box[2][1]&&box[2][1]===box[2][2])
        {setwin(box[2][0])}
        if (box[0][0] !== null && box[0][0] === box[1][0] && box[1][0] === box[2][0])
        {setwin(box[0][0]);}         
        if(box[0][1]!=null&&box[0][1]===box[1][1]&&box[1][1]===box[2][1])
        {setwin(box[0][1])}
        if(box[0][2]!=null&&box[0][2]===box[1][2]&&box[1][2]===box[2][2])
        {setwin(box[0][2])}
        if(box[0][0]!=null&&box[0][0]===box[1][1]&&box[1][1]===box[2][2])
        {setwin(box[0][0])}
        if(box[0][2]!=null&&box[0][2]===box[1][1]&&box[1][1]===box[2][0])
        {setwin(box[0][2])}
        if (!box.flat().includes("") && !win)
        {setwin("tie");}
          
    }
    const [ch,setch]=useState('X');
    const handleClick = (r, c) => {
        if(box[r][c] || win ) return;
        const newB = [...box];
        newB[r][c] = ch;
        setBox(newB);
        playClickSound();
        setch(ch==='X'?'O':'X');
        check();
    };
  return (
    <div className="body">
        <div className="title aligncentre"><span className="sha"><a href="https://www.linkedin.com/in/link-sharan-s/" target="_blank" rel="noopener noreferrer"  style={{ color: '#66FCF1' }}>.Sha</a></span>tic tac toe<span className="port"><a href="https://www.linkedin.com/in/link-sharan-s/" target="_blank" rel="noopener noreferrer"  style={{ color: '#66FCF1', textDecoration: 'none'}}>View Portfolio</a></span></div>
            <div className="aligncentre ch">{win ? (win === "tie" ? "The game ended in a draw" : `${win} wins`) : `Let ${ch} play`}</div>
        <div className="aligncenter board">
            {
                box.map((row,ri) =>(
                    <div className="row">
                        {
                            row.map((cell,ci) =>(
                                <div onClick={() => handleClick(ri,ci)} 
                                className={`tile ${color(box[ri][ci])}`}>{box[ri][ci]}</div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
        <button onClick={() => {
            setwin('');
            setch('X');
            setBox([
            ["","","",],
            ["","","",],
            ["","","",]
             ]) 
        }} className="b">Reset the board
        </button>
    </div>
  )
}

export default Game