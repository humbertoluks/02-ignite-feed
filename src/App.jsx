
import { Header } from './Components/Header';
import Post from './Post';
import './global.css'

function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Humberto Luksevicius" 
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda sit similique eos laudantium maiores? Maxime ipsum, necessitatibus sed quidem tenetur rem eos esse voluptatem. Assumenda obcaecati ipsam voluptas ea facere?"
      />
    </div>
  )
}

export default App
