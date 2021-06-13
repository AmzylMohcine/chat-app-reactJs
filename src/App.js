import {ChatEngine} from 'react-chat-engine' ; 
import ChatFeed from './components/ChatFeed'; 
import LoginForm from './components/loginForm';

import './App.css' ; 

const projectID = '8329405d-47c0-413a-be28-3172c5b57814';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};
export default App ; 