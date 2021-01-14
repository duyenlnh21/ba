import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Chào mừng quý bạn đến với Dịch vụ vườn - Lê Nguyễn Hữu Duyên
        </p>
        <h2>ĐI CHỢ</h2>
        <h2>THĂM QUAN</h2>
        <h2>THANH TOÁN</h2>
        <a
          className="App-link"
          href="https://www.facebook.com/groups/1275985819440943"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hỗ trợ: 0375893542
        </a>
      </header>
    </div>
  );
}

export default App;
