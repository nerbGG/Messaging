
import './App.css';
import MessagePage from './components/MessagePage';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <div className='App border'>
        <Routes>
            <Route path="login" element={<Login />}/>
            <Route path="/" element={<MessagePage />}/>
          </Routes>
      </div>
    </Router>
    // <div className='App border'>

    //     {/* <Login/> */}
    //     {/* <MessagePage/> */}
    // </div>
  );
}

export default App;
