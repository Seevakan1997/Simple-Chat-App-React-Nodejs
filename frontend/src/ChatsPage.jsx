
import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatsPage =(props)=>{
   

    return (
        
    <div style={{height:'100vh'}}>
        <PrettyChatWindow
      projectId="336bc2f5-a8ed-40ed-a5a4-af2fd22f7928"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100vh' }}
    />
    </div>
    )
}

export default ChatsPage;