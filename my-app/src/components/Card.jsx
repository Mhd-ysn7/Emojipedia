import './Card.css';

function Card(props){
    return(
        <div className='Card'>
            <div className='top'>
            <img src={props.icon} className='icon'/>
            </div>
            <h3 className='title'>{props.name}</h3>
            <p className='description'>{props.meaning}</p>
        </div>
    );
}

export default Card;