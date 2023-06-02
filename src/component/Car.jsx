import React from 'react'
import { myMemo } from './hoc/myMemo'
import MyPureComponent from './hoc/myPureComponent'

class Car extends MyPureComponent {
  // class Car extends React.Component {
  componentDidUpdate() {
    console.log(this.props.carData.make, 'updated')
  }

  render() {
    console.log('render')
    const { make, quantity } = this.props.carData
    return (
      <div
        style={{
          border: '1px solid black',
          width: '100px',
          height: '100px',
          margin: '20px',
          display: 'inline-block',
        }}
      >
        <p>{make}</p>
        <p>{quantity}</p>
      </div>
    )
  }
}

// export default myMemo(Car);
export default Car
