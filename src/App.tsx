import './App.less';
import { HeaderNav } from './components/Navbar/HeaderNav';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { Button } from 'antd';
import { useMediaQuery } from 'react-responsive'
import { DownloadOutlined } from '@ant-design/icons';

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div className="App" style={{ fontFamily: 'Roboto Mono,monospace' }}>
      <Router>
        <HeaderNav />
        <Routes></Routes>
        {isDesktopOrLaptop && <a href='https://drive.google.com/file/d/1Zs7Bpp-J9Cw8-RsxzHvfvlckBZ181_ju/view'  rel="noopener noreferrer" target="_blank"><Button shape='round' size="large" type="primary" icon={<DownloadOutlined />} style={{position:'fixed',bottom:'20px',right:'30px',color:'black'}}>Download My Resume</Button></a>}
        {isTabletOrMobile && <a href='https://drive.google.com/file/d/1Zs7Bpp-J9Cw8-RsxzHvfvlckBZ181_ju/view'  rel="noopener noreferrer" target="_blank"><Button shape='round' size="large" type="primary" icon={<DownloadOutlined />} style={{position:'fixed',bottom:'20px',right:'30px',color:'black'}}></Button></a>}
        

      </Router>
    </div>
  );
}

export default App;
