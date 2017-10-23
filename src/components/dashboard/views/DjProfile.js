import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Col, Row, Tag } from 'antd'
import { Divider } from 'semantic-ui-react'
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
      <Row>
        <Col span={24}>
          <div style={{ padding: 24, background: '#fff', minHeight: 400, margin: '6px 6px', textAlign: 'left'}}>
            <Row>
              <Col span={8}>
                <img alt="example" width="100%" src={this.state.artist.image} />
              </Col>
              <Col span={1}></Col>
              <Col span={6}>
                <h1>{this.state.artist.name}</h1>
                <p>{this.state.artist.bio}</p>
                <Tag color='#108ee9'>{this.state.artist.genre}</Tag>
              </Col>
              <Col span={6}></Col>
              <Col span={2}>
                <Link to='/dashboard'>Go Back</Link>
              </Col>
            </Row>
            <Divider horizontal>Music</Divider>
            <Row>
              <Col span={24} style={{ margin: '20px' }}>
                <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fwheresnasty%2F" frameborder="0" ></iframe>
                <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Frubradiobrooklynradio%2F" frameborder="0" ></iframe>
                <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fdjemilyrawson%2Fsupa-dupa-fly-mix-90s-hip-hop-rnb-jan-2012-mixed-live-at-supa-dupa-fly%2F" frameborder="0" ></iframe>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
    );
  }
}

export default withRouter(DjProfile)
