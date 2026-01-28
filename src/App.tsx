import './App.less';
import { About } from './components/About';
import { Projects } from './components/Projects';

export const App = () => {
    return (
        <main className='app'>
            <About />
            <Projects />
        </main>
    );
};
