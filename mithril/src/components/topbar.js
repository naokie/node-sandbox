import m from 'mithril';

export default class Topbar {
  oninit(vnode) {
    vnode.state = {
      throttle: 20,
      scrollTop: 0,
    };
  }

  oncreate({state}) {
    let scrollId = null;

    const scroll = () => {
      clearTimeout(scrollId);
      scrollId = setTimeout(() => {
        state.scrollTop = window.scrollY || 0;
        m.redraw();
      }, state.throttle);
    }

    window.addEventListener('scroll', scroll);
  }

  view({state, attrs}) {
    const styles = {
      bar: {
        position: 'fixed',
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '44px',
        backgroundColor: '#2c3e50',
        color: '#fff',
        textAlign: 'center',
      },
      label: {
        margin: 0,
        fontSize: '24px',
      },
    };

    return (
      <div style={styles.bar}>
        <h1 style={styles.label}>{state.scrollTop}</h1>
      </div>
    );
  }
}
