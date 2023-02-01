import './rightbar.scss'
import Responses from '../responses/Responses'
import MessageBox from '../messageBox/MessageBox'
export default function Rightbar() {
  return (
   
      <div className='rightbar'>
      <Responses />
      <MessageBox/>
      </div>
  )
}
