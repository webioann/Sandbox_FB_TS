import React from 'react'

function SimpleComponent() {
    type Name = string;
    type Score = number;
    
    // make a new map
    const testScores: Map<Name, Score> = new Map();
    
    // insert new pair
    testScores.set("Alice", 96);
    testScores.set("Bob", 88);
    // remove pair based on key
    testScores.delete("Bob");
    
    // iterate over pairs
    for (const [name, score] of testScores) {
        console.log(`${name} score is ${score}`);
    }
    
    // empty the map
    testScores.clear();    
    return (
        <div>SimpleComponent 
            <button >Click</button>
        </div>
    )
}

export default SimpleComponent;