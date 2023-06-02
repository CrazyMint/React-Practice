import React from 'react'

export const myMemo = (WrappedComponent, arePropsEqual) => {
  return class newComponent extends React.Component {
    shouldComponentUpdate(nextProps) {
      if (arePropsEqual) {
        return arePropsEqual(this.props, nextProps)
      }
      for (let key in nextProps) {
        if (!this.props[key] || nextProps[key] !== this.props[key]) {
          console.log(key, nextProps[key])
          return true
        }
      }
      return false
    }

    render() {
      console.log('from myMemo')
      return (
        <WrappedComponent {...this.props} {...this.state}></WrappedComponent>
      )
    }
  }
}
