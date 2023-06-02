import React, { PureComponent } from 'react'

export default class TestElement extends PureComponent {
  componentDidUpdate() {
    console.log(
      'itemId:',
      this.props.itemId,
      '; path data:',
      this.props.itemData,
      'updated'
    )
  }

  render() {
    return <div>{this.props.itemData}</div>
  }
}
