import React, { Component } from 'react'

export default class TotalSalaryPage extends Component {
  render() {
    return (
      <div>
        TotalSalary is : {parseInt(this.props.monthlySalary) * 12 + parseInt(this.props.bonus) }
      </div>
    )
  }
}
