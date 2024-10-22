import './User.css';
import { User } from '../../types.tsx';


interface UserProps {
    user: User;
    }

function UserCard( props: UserProps) {
    return ( 
        <>
        <div className='Name'>{props.user.name}</div>
        <p>{props.user.age}</p>
        <div className={props.user.status === "online" ? "online" : "offline"}>
            {props.user.status === "online" ? "En ligne" : "Hors ligne"}
        </div>

    </>
    );
      
}

export default UserCard;