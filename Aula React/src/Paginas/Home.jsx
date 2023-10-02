import { Link } from 'react-router-dom'

function Home(){
    return(
        <div>
            <h1>Já pode...</h1>
            <Link to={'/Joao'}>Já pode</Link>
        </div>
    )
}

export default Home