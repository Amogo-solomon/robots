import React from 'react';

const Card = ({ name, email, id}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
    



/* note: the html lookalike syntax below is the JSX ConvolverNode. that's why react is imported as seen above */
/* const Card = (props) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 grow ma2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${props.id}?200x200`} /> */
            /* <img alt='robots' src='https://robohash.org/A81.png?set=set1?200x200' /> */
           /*  <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
} */

export default Card;