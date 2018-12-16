import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';


const RepoList = (props) => {
  var repoList = []
  var repoListLength = Math.min(props.repos.length, 25)
  console.log(repoList)
  for (var i = 0; i < repoListLength; i++) {
    repoList.push(<RepoListEntry repo={props.repos[i]} key={i} />)
  }

  return (
    <div>
      <h4> Repo List Component </h4>
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