import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateArticleInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: '',
      author:'',
      published_date:'',
      credibity_rating:'',
      SE_method: '',
      reasearch_method:''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/articles/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, article: res.data})
        this.setState({
          titles: res.data.titles,
          author: res.data.author,
          published_date: res.data.published_date,
          credibity_rating: res.data.credibity_rating,
          SE_method: res.data.SE_method,
          reasearch_method: res.data.reasearch_method
        })
      })
      .catch(err => {
        console.log("Error from UpdateArticleInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      titles: this.state.titles,
      author: this.state.author,
      published_date: this.state.published_date,
      credibity_rating: this.state.credibity_rating,
      SE_method: this.state.SE_method,
      reasearch_method: this.state.reasearch_method
    };

    axios
      .put('http://localhost:8082/api/articles/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-article/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateArticleInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateArticleInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Article List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Article</h1>
              <p className="lead text-center">
                  Update Article's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            
          <div className='form-group'>
              <input
                type='text'
                placeholder='titles'
                name='titles'
                className='form-control'
                value={this.state.titles}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
                <input
                  type='text'
                  placeholder='author'
                  name='author'
                  className='form-control'
                  value={this.state.author}
                  onChange={this.onChange}
                />
            </div>

            <div className='form-group'>
              <input
                type='date'
                placeholder='published_date'
                name='published_date'
                className='form-control'
                value={this.state.published_date}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
              <input
                type='number' 
                min="1" 
                max="5"
                placeholder='Credibity rating'
                name='credibity_rating'
                className='form-control'
                value={this.state.credibity_rating}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
              <input
                type='text'
                placeholder='SE Method'
                name='SE_method'
                className='form-control'
                value={this.state.SE_method}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
              <input
                type='text'
                placeholder='Reasearch method'
                name='reasearch_method'
                className='form-control'
                value={this.state.reasearch_method}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Article</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateArticleInfo;