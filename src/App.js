import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header/header";
import AboutMe from "./components/AboutMe";
import JobDetail1 from "./components/JobDetail1";
import JobDetail2 from "./components/JobDetail2";
import JobDetail3 from "./components/JobDetail3";
import Experience from "./components/Experience";

import Footer from "./components/Footer"; // Footer 컴포넌트 추가

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            {/* 메인 홈은 AboutMe 컴포넌트로 지정  */}
            <Route path="/job1" element={<JobDetail1 />} />
            {/* 첫 번째 직업 페이지 */}
            <Route path="/job2" element={<JobDetail2 />} />
            {/* 두 번째 직업 페이지 */}
            <Route path="/job3" element={<JobDetail3 />} />
            {/* 세 번째 직업 페이지 */}

            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
        <Footer /> {/* Footer 추가 */}
      </div>
    </Router>
  );
}

export default App;
