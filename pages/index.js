import { Provider } from 'react-redux'
import reducer from '../reducers/index';
import { initStore } from '../reducers/index';
import Card from '../components/Card';

export default class Index extends React.Component {
  static getInitialProps ({ req }) {
    const isServer = !!req;
    const store = initStore(reducer, null, isServer);
    return { initialState: store.getState(), isServer };
  }

  constructor (props) {
    super(props)
    this.store = initStore(reducer, props.initialState, props.isServer)
  }

  render () {
    return (
      <div id="main">
        <div id="firebaseui-auth-container" />
        <Provider store={this.store}>
          <Card />
        </Provider>
        <style>{`
          #main {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    );
  }
}
