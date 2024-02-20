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
                <div className='media'><img src=''/><a target='_blank' href='https://vk.com/fakyring'>VK</a></div>
                <div className='media'><img src=''/><a>Mail</a></div>
                <div className='media'><img src=''/><a>MIREA</a></div>
                <div className='media'><img src=''/><a>Steam</a></div>
            </footer>
        </div>
    );
}

export default App;
