import './App.less';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Education } from './components/Education';

export const App = () => {
    return (
        <main className='app'>
            <About />
            <Projects />
        </main>
    );
};
