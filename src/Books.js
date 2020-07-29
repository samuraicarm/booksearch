import React, { Component } from 'react';
import SearchArea from './SearchArea';


class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: ''
        };
    }

  //set state every time type into input box
    handleSearch =(e) => {
        console.log(e.target.value);
        this.setState({ searchField: e.target.value })
    }
   
  
    componentDidMount() {
        let url = 'https://www.googleapis.com/books/v1/volumes?q=';
        let params = this.state.searchField;
        let searchUrl = url+params;
        const options = {
          method: 'GET',
          headers: {
            // Add your key after Bearer
            "Authorization": "Bearer  AIzaSyAgrb1czK9DcfD_mAovYCci4qCtPDf-QyU",
            "Content-Type": "application/json"
          }
        };
     
     
        fetch(searchUrl, options)
          .then(res => {
            if(!res.ok) {
              throw new Error('Something went wrong, please try again later.');
            }
            return res;
          })
          .then(res => res.json())
          .then(data => {
            this.setState({
              books: data,
              error: null
            });
          })
          .catch(err => {
            this.setState({
              error: err.message
            });
          });
    
        }
  
    
        render(){
        return (
            <div>
        <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>

            </div>
        );
    }
}


export default Books;