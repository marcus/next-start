import React from 'react'
import { Editor, Raw } from 'slate'
import { connect } from 'react-redux';
import { getPrompts } from '../reducers/prompts';

const initialState = Raw.deserialize({
  nodes: [
    {
      kind: 'block',
      type: 'paragraph',
      nodes: [
        {
          kind: 'text',
          text: 'Type here'
        }
      ]
    }
  ]
}, { terse: true });

export class Card extends React.Component {
  state = {
    ...initialState,
    prompts: "default",
  }

  componentWillMount() {
    //this.props.getPrompts();
  }

  onChange = (state) => {
    this.setState({ state })
  }

          //<Editor
            //state={this.state.state}
            //onChange={this.onChange}
          ///>
  render () {
    return (
      <div className="card">
        <div>
          <span className="title">Teach me about</span> <span className="subject">{this.props.prompt}</span>
        </div>

        <div className="editor">
        </div>

        <style jsx>{`
          .card {
            background-color: white;
            //border: 1px solid #393736;
            padding: 15px;
            width: 98%;
            max-width: 1100px;
            height: 98%;
            overflow: auto;
          }
          .title {
            font-size: 2.0em;
            color: #95989A;
          }
          .subject{
            font-size: 2.0em;
            color: #32D900;
          }
          .editor {
            margin-top: 10px;
            font-size: 2.2em;
            line-height: 1.2em;
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => ({
  prompts: state.prompts,
  prompt: state.prompt,
}), { getPrompts })(Card);
