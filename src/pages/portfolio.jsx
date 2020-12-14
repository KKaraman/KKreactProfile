import React, { Component } from "react";
import Project from "../components/Project";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import projects from "../projects.json";

class Portfolio extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects
  };


  // Map over this.state.projects and render a project component for each one
  render() {
    return (
      <Wrapper>
        <Title>Project Examples</Title>
        {this.state.projects.map(project => (
          <Project
            id={project.id}
            key={project.id}
            name={project.name}
            deployment={project.deployment}
            repository={project.repository}
            grade={project.grade}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Portfolio;