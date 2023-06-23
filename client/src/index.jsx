// import Search from './components/Search.jsx';
// import RepoList from './components/RepoList.jsx';
// import axios from 'axios';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       repos: []
//     }
//     this.updateData = this.updateData.bind(this);
//   }

//   updateData() {
//     axios.get('/repos')
//     .then((response) => {
//       let newList= [...this.state.repos];
//       newList = [... response.data];
//       this.setState({repos: newList});
//     })
//   }

//   search (term) {
//     console.log(`${term} was searched`);
//     axios.post('/repos', {user: term})
//       .then((response) => {
//         console.log(`Response is ${response}`);
//         this.updateData();

//       })
//       .catch((error) => console.log(error));
//   }

//   componentDidMount() {
//     this.updateData();
//    }

//   render () {
//     return (<div>
//       <h1>Github Fetcher</h1>
//       <RepoList repos={this.state.repos}/>
//       <Search onSearch={this.search.bind(this)}/>
//     </div>)
//   }
// }

// ReactDOM.render(<App />, document.getElementById('app'));