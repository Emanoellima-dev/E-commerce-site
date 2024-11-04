import { IoMdNotifications } from "react-icons/io";
import './Notifications.css'

export default function Notifications(){
  return (
     <div>
       <h1 className="text">Notificações</h1>

       <span className="Icon">
         <IoMdNotifications/>
       </span>
       <h1 className="text">Você Ainda Não Tem Notificações</h1>
     </div>
  )
}
