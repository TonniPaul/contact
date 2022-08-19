import { Link } from "react-router-dom";


export default function Navitems(props) {
  return (
    <div>
      <ul>
         <li>
         <Link to={props.link}>
                        <div className='icons'>
                        <i class={props.iconclass}></i>
                           <p>{props.icondescription}</p>
                        </div>
         </Link>
         </li>
      </ul>
    </div>
  )
}
