import React, { Component } from 'react'
import axios from 'axios'

class Cell extends Component {
  render() {
    return (
      <>
        <td
          className="cell"
          onContextMenu={this.props.rightClickEvent}
          onClick={this.props.onClick}
        >
          {this.props.display}
        </td>
      </>
    )
  }
}

export default Cell
