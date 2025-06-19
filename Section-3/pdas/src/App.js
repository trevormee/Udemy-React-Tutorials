import ProfileCard from './ProfileCard';
import 'bulma/css/bulma.css';       // Free, open source CSS framework

// Import our images
import AlexaImage from './images/alexa.jpg';
import SiriImage from './images/siri.jpg';
import CortanaImage from './images/cortana.jpg';

// Main App Component
function App() {
    return (
        <div>
            
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>
            
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard title = "Alexa" handle= "@alexa99" image={AlexaImage} description="Cool alexa"/>
                        </div>
                        <div className="column is-3">
                            <ProfileCard title = "Cortana" handle= "@cortana99" image={CortanaImage} description="Really Cool Cortana"/>
                        </div>
                        <div className="column is-3">
                            <ProfileCard title = "Siri" handle= "@siri99" image={SiriImage} description="Really really cool siri"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;