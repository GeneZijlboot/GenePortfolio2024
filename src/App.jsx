import Taskbar from './components/taskbar';
import Devider from './components/devider';
import Frontpage from './components/frontpage';
import About from './components/about';
import Techstack from './components/techstack';

import './styling/app.scss';

function App() {

  return (
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="portfolio-container">
            <div className="row">
              <div className="col-md-12">
                <Taskbar />
                <Devider />
                <Frontpage />
                <Devider />
                <About />
                <Devider />
                <Techstack />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    );
}

export default App
