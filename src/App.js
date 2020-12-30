import {Component} from 'react';
import Book from './Components/Book';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      title: '',
      author: ''
    }
  }

  handleInputs = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  getBooks = () => {
    //code here
  }

  addBook = () => {
    //code here
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>WR8's Bookshelf</h1>
          <input value={this.state.title} placeholder='Title' onChange={e => this.handleInputs(e)}/>
          <input value={this.state.author} placeholder='Author' onChange={e => this.handleInputs(e)}/>
          <button>Add Book</button>
          {this.state.books.map(book => (
            <Book key={book.id} book={book} getBooksFn={this.getBooks}/>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
