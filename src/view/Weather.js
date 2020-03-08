import React from 'react';
import { Col, Row, Card } from 'antd';
import Axios from 'axios';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    this.getWeather();
  }
  getWeather = () => {
    Axios({
      method: 'GET',
      url: '/weather',
    }).then((res) => {
      this.setState({
        list: res.data.result.future.slice(1, res.data.result.future.length)
      });
    })
  }
  
  
  render() {
    const renderList = this.state.list.map((d, i) => {
      return <Col span={6} key={ i }>
        <Card title={ d.date } key={ i }>
          { d.temperature}
          { d.weather}
        </Card>
      </Col>
    })
    return (
      <div>
        <Row gutter={24}>
          { renderList }
        </Row>
      </div>
    )
  }
}

export default Clock;