import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/articles/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showArticleDetails-API-response: " + res.data);
        this.setState({
          article: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowArticleDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/articles/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowArticleDetails_deleteClick");
      })
  };


  render() {

    const article = this.state.article;
    let ArticleItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ article.titles }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{ article.author }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Published Date</td>
            <td>{ article.published_date }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Credibity Rating</td>
            <td>{ article.credibity_rating }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>SE Method</td>
            <td>{ article.SE_method }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Reasearch Method</td>
            <td>{ article.reasearch_method }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowArticleDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Article List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Article's Record</h1>
              <p className="lead text-center">
                  View Article's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { ArticleItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,article._id)}>Delete Article</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-article/${article._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Article
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Article</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Article</button> */}

        </div>
      </div>
    );
  }
}

export default showArticleDetails;