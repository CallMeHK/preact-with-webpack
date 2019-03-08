import { h, render, Component } from "preact";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";

class Comp1 extends Component {
  constructor() {
    super();
    // set initial time:
    this.state.time = Date.now();
  }

  componentDidMount() {
    // update time every second
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }

  componentWillUnmount() {
    // stop when not renderable
    clearInterval(this.timer);
  }

  render(props, state) {
    let time = new Date(state.time).toLocaleTimeString();
    return (
      <div>
        <span>{time}</span>
        <Comp2 />
        <Comp3 />
      </div>
    );
  }
}

export default Comp1;
