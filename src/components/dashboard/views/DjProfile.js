import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class DjProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: [],
    };
  }

  componentDidMount () {
    let self = this
    let artistId = this.props.match.params.id
    // GET Artists
    axios.get('https://vinyl-backend-api.herokuapp.com/artists/' + artistId)
    .then(response => {
      this.setState({artist: response.data.artist})
      console.log(response.data)
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error)
    })
  }

  render() {

  return(
    <div>
      {this.state.artist.name}
    </div>
    );
  }
}

export default withRouter(DjProfile)
