import React, { Component } from 'react'
import TestElement from './hoc/TestElement'

export default class Test extends Component {
  state = {
    id: '001',
    type: 'A',
    value: 'aaaaa',
    'data:': {},
    path: ['001'],
    children: [
      {
        id: '003',
        type: 'A',
        value: 'aaaaa',
        'data:': {},
        path: ['001', '003'],
        children: [
          {
            id: '002',
            type: 'A',
            value: 'aaaaa',
            'data:': {},
            path: ['001', '003', '002'],
            children: [],
          },
        ],
      },
      {
        id: '004',
        type: 'A',
        value: 'aaaaa',
        'data:': {},
        path: ['001', '004'],
        children: [
          {
            id: '005',
            type: 'A',
            value: 'aaaaa',
            'data:': {},
            path: ['001', '004', '005'],
            children: [],
          },
          {
            id: '005',
            type: 'A',
            value: 'aaaaa',
            'data:': {},
            path: ['001', '004', '005'],
            children: [
              {
                id: '002',
                type: 'A',
                value: 'aaaaa',
                'data:': {},
                path: ['001', '004', '005', '002'],
                children: [],
              },
            ],
          },
        ],
      },
    ],
  }

  handleStateChange2 = () => {
    this.setState((prev) => {
      const updatedState = JSON.parse(JSON.stringify(prev))

      // Update 'state.children[0].children[0].path[1]'
      updatedState.children[0].children[0].path[1] = '004'

      // Update 'state.children[1].children[1].children[0].path[2]'
      updatedState.children[1].children[1].children[0].path[2] = '006'

      return updatedState
    })
  }

  handleStateChange = () => {
    this.setState((prev) => {
      const x = { ...prev.children.slice(1) }
      console.log(prev.children[1] === x)
      const newState = {
        ...prev,
        children: [
          {
            ...prev.children[0],
            children: [
              {
                ...prev.children[0].children[0],
                path: [
                  ...prev.children[0].children[0].path.slice(0, 1),
                  '004',
                  ...prev.children[0].children[0].path.slice(2),
                ],
              },
              ...prev.children[0].children.slice(1),
            ],
          },
          {
            ...prev.children[1],
            children: [
              ...prev.children[1].children.slice(0, 1),
              {
                ...prev.children[1].children[1],
                children: [
                  {
                    ...prev.children[1].children[1].children[0],
                    path: [
                      ...prev.children[1].children[1].children[0].path.slice(
                        0,
                        2
                      ),
                      '006',
                      ...prev.children[1].children[1].children[0].path.slice(3),
                    ],
                  },
                ],
              },
              ...prev.children[1].children.slice(2),
            ],
          },
          ...prev.children.slice(2),
        ],
      }
      return newState
    })
  }

  render() {
    return (
      <div>
        <div>
          {this.state.children[0].children.map((item, index) => {
            return (
              <TestElement
                key={index + item.id}
                itemId={index + item.id}
                itemData={item.path.join(', ')}
              />
            )
          })}
          <TestElement
            key={1005}
            itemId={1005}
            itemData={this.state.children[1].children[0].path.join(', ')}
          />
          <TestElement
            key={1005002}
            itemId={1005002}
            itemData={this.state.children[1].children[1].children[0].path.join(
              ', '
            )}
          />
        </div>
        <button onClick={this.handleStateChange2}>change state</button>
      </div>
    )
  }
}
