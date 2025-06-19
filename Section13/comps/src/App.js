import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage'
import Sidebar from './components/Sidebar';

// Main App component responsible for rendering the Sidebar and instantiating
// the Route Component
function App() {

    return (
        <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
            {/* Call the sidebar componenet */}
            <Sidebar />
            <div className='col-span-5'>
                {/* Set up routes for each page */}
                <Route path="/accordion">
                    <AccordionPage />
                </Route>
                <Route path="/">
                    <DropdownPage />
                </Route>
                <Route path="/buttons">
                    <ButtonPage />
                </Route>
            </div>
        </div>
    );
}

export default App;