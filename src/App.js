import './App.css';

function App() {
    const images = require.context('./images', true);
    const imageList = images.keys().map(image => images(image));
    return (
        <div className="main">
            <div className="items">
                {imageList.map((image, name) => (
                    <div className="item">
                        <img src={image}/>
                        <button>Add {name}</button>
                    </div>
                ))}
            </div>
            <footer>
                