import m from 'mithril';
import Counter from '../components/counter';
import Topbar from '../components/topbar';
import store from '../store';
import {
  countUp,
  countDown
} from '../actions';

export default class Root {
  constructor() {
    console.log(process.env.NODE_ENV);
    this.state = store.getAll();
  }

  view(vnode) {
    const style = {
      height: '3000px',
    };

    return (
      <main style={style}>
        <p>{this.state.data.count}</p>
        <Counter click={countUp} count={this.state.data.count}/>
        <Counter click={countDown} count={this.state.data.count}/>
      </main>
    );
  }
}
