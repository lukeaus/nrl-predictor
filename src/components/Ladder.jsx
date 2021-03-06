import React from 'react'
import sample from 'lodash/sample'
import { Table } from 'reactstrap'

import { PUNDITS } from '../content'

class Ladder extends React.Component {
  renderTeams() {
    const { ladder, teams, comments } = this.props

    return ladder.map((teamName, index) => {
      const logoFileName = `${teams[teamName].teamNickname}.gif`
      const comment = comments[index]

      return (
        <tr key={teamName}>
          <td
            style={{
              backgroundColor: '#FCFFFC',
              verticalAlign: 'middle',
              padding: '2px'
            }}
          >
            <img
              src={require(`../images/teams/small/${logoFileName}`)}
              alt={`${teamName} logo`}
            />
          </td>
          <td style={{ verticalAlign: 'middle', backgroundColor: '#FCFFFC' }}>
            <strong>{teamName}</strong>
          </td>
          <td style={{ verticalAlign: 'middle', backgroundColor: '#FCFFFC' }}>
            <em>{comment}</em> -- {sample(PUNDITS)}
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <Table>
        <tbody>{this.renderTeams()}</tbody>
      </Table>
    )
  }
}

export default Ladder
