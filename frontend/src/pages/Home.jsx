import '../assets/css/styles.css'
import '../assets/css/index.css'
import moon from '../assets/img/moon.jpg'

function Home() {
    return (
        <>
            <div class="body-container">
                <h1 class="hero-header">Home</h1>
                <img src={moon} class="hero-img"/>
            </div>
        </>
    );
}

export default Home;