import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import {Route} from 'react-router-dom';
import ArticlePage from './pages/article/article.component';
import Header from './components/header/header.component'

function App() {
  return(
    <div>
      <Header/>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/news" component={ArticlePage}/>
    </div>
  )
 
}

export default App;
