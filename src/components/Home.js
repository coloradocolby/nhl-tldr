import React, { Component } from 'react';
import axios from 'axios';
import TeamCard from './TeamCard';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    };
  }

  componentDidMount() {
    axios.get(`/api/teams`).then(({ data }) => {
      this.setState(() => ({
        teams: data
      }));
    });
  }

  render() {
    const { teams } = this.state;
    if (!teams.length)
      <progress className="progress is-large is-primary" max="100"></progress>;
    return (
      <div className="columns is-multiline is-mobile">
        {teams.map((team, i) => {
          return (
            <div
              key={i}
              className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop"
            >
              <TeamCard {...team} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default HomeComponent;