import React from 'react';

const Users = (props) => {
    const familiar = props.familiar;
    let greetings;  // condition set korche niche; it's just awesome man;
    if(familiar){   // (familiar === true) - etao lekha jeto;
        greetings = <p>Welcome, my friend</p>
    }
    else{
        greetings = <p>who are you?</p>
    }
    // ==================  if/else in one line  ======================;
     // if er condition er por "?" use kore; r esle er bodole ":" use kore;

    /* =================================================
    // ==================;
    const number = 8;
    const greetings3 = number > 5 ? 'hello' : 'gello';  
    // ==================;
    const greetings4 = number > 5 && number < 10 && number === 8 ? 'hello' : 'gello';  // && die "bracket er moddhe likhte hoy!?" aro condition set kora jabe;
    // ==================  if/else in one line  ======================;
    ==================================================== */
    
    
    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {greetings}
                {/* <p>Welcome, my friend</p> -- eta condition e use hoice */}
                {/* <p>who are you?</p> */}
            </div>
            <div>
                <h2>Food</h2>
                {
                    familiar ? <p>let's eat burito!</p> : <p>you can pay the bill I won't mind</p>
                }
                
                
            </div>
            <div>
                <h2>Connection</h2>
                {
                    familiar && <p>Let's add on Facebook</p>
                }
                
                {/* <p>I don't add strangers</p> */}
            </div>
        </div>
    );
};

export default Users;