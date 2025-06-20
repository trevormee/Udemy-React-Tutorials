import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {

    const handleClick = () => {
        console.log('Clicked!');
    };

    return (
        <div>
            <div>
                <Button success rounded outline className="mb-5" onClick={handleClick}>
                    <GoBell />
                    Click Me!
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoCloudDownload />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase /> 
                    See Deal!
                </Button>
            </div>
            <div>
                <Button secondary>
                    Hide Ads
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    Something
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;