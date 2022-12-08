import React from 'react';

const RepoList = (props) => (

  // <div>
  //     {props.repos.map((repo, id) => <h4 onClick={() => {
  //       window.open(repo.url);
  //     }} key={repo.url + id}>{repo.name}</h4>)}
  //   </div>

  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;