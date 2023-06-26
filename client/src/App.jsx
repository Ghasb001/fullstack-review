import React from 'react';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

const App = () => {
  // const [list, setList] = useState([]);
  // const [] = useState();

  let updateData = () => {
    axios.get('/repos')
    .then((response) => {
      console.log(response)
      // setList([response])
    })
  }

  console.log(updateData())


  return (
    <h1>Github Fetcher</h1>
    // <RepoList repos={this.state.repos}/>
    // <Search onSearch={this.search.bind(this)}/>
  )
}

export default App;