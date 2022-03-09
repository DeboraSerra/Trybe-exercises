import React from "react";

class StopWatch extends React.Component {
  constructor() {
    super();
    this.state = {
      timeLeft: 0,
      time: 0,
      secLeft: 0,
      intervalId: '',
      finished: false,
    }
  }

  componentDidMount() {
    const { time } = this.props;
    this.setState({ timeLeft: time }, () => this.setInterval());
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  setInterval = () => {
    const intervalId = setInterval(() => {
      const { timeLeft } = this.state;
      if (timeLeft > 0) {
        const newTime = timeLeft - 1;
        this.setState({ time: new Date(timeLeft * 1000).toISOString().substring(11, 19),
          timeLeft: newTime });
      } else {
        this.setState({ time: new Date(timeLeft * 1000).toISOString().substring(11, 19) });
        this.stopCounting();
      }
    }, 1000);
    this.setState({ intervalId });
  }

  stopCounting = () => {
    const { intervalId } = this.state;
    clearInterval(intervalId);
    this.setState({ finished: true });
  }

  render() {
    const { time, finished } = this.state;
    const date = new Date().toDateString().split(' ')[0];
    const alarm = (
      <p className="alert">{ date === 'Fri' ? 'It\'s Friday!!' : 'Time is up!' }</p>
    )
    return (
      <div className="stop-watch-sect">
        {!finished && <p className="stop-watch">{time}</p>}
        {finished && alarm}
      </div>
    )
  }
}

export default StopWatch;