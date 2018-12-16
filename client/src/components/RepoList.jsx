import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';


const RepoList = (props) => {
  console.log("props at repoist", props)
  var repoList = []
  var repoListLength = Math.min(props.repos.length, 25)
  console.log("length", repoListLength)
  for (var i = repoListLength - 1; i >= 0; i--) {
    repoList.push(<RepoListEntry repo={props.repos[i]} key={i} />)
  }

  return (
    <div>
      <h4> List of Repos </h4>
      <p>There are {props.repos.length} repos</p>
      <table>
        <tr>
          <th>
            Repo Owner Name
          </th>
          <th>
            Repo Owner URL
          </th>
          <th>
            Repo Name
          </th>
          <th>
            Repo Url
          </th>
        </tr>
        {repoList}
      </table>
    </div>
  )
}


export default RepoList;