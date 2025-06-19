import Accordion from "./components/Accordion";

function App() {

    const items = [
        {
            id: '321a',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want.'
        },
        {
             id: '3dfsa',
            label: 'Can I use JS on a project?',
            content: 'You can JS React on any project you want.'
        },
        {
             id: 'a432',
            label: 'Can I use CSS on a project?',
            content: 'You can use CSS on any project you want.'
        },
    ];

    return (
        <>
            < Accordion items={items} />
        </>
    );
}

export default App;