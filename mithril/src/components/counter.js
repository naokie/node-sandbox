import m from 'mithril';

export default class Counter {
  even(count) {
    return count % 2 === 0;
  }

  view({attrs}) {
    const style = {
      fontSize: '32px',
      color: this.even(attrs.count) ? 'blue' : 'red',
    };

    return (
      <div>
        <button style={style} onclick={attrs.click}>{attrs.count}</button>
        <p>{this.even(attrs.count) ? 'even' : 'odd'}</p>
      </div>
    );
  }
}
