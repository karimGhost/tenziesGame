import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <h2 id={props.value === 5 ? "fives" : ""} className="die-num">{props.value === 1 ?  <div className="spaned5">
            <div className="spane">.</div>
            
            </div>
            
            : props.value === 2 ?   <div className="spaned4">
            <div className="spane sp1">.</div>
            <div className="spane sp3">.</div>
            </div> : 
            
            props.value === 3 ? 
            <div className="spaned4 st4">
            <div className="spane st4 sp1">.</div>
            <div className="spane st4 sp2">.</div>
            <div className="spane st4 sp3">.</div>
            </div> : 
            
             props.value === 4 ?  <div className="spaned3">
            <div className="spane">.</div>
            <div className="spane">.</div>
            <div className="spane">.</div>
            <div className="spane">.</div>
            </div>
            
            : props.value === 5 ? <div className="spaned">
            <div className="spane">.</div>
            <div className="spane">.</div>
            <div className="spane">.</div>
            <div className="spane">.</div> 
            
            </div> : props.value === 6 ? <div className="spaned2">
            <div className="spane">.</div>
            <div className="spane">.</div>
            <div className="spane">.</div>
            <div className="spane">.</div>
            <div className="spane">.</div> 
            <div className="spane">.</div>
            </div> : ""  }</h2>
        </div>
    )
}
