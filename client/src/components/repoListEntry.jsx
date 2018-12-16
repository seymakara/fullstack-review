import React from 'react';
const RepoListEntry = (props) => {
    var ownerName = props.repo.owner.login;
    var ownerUrl = props.repo.owner.url;
    var repoName = props.repo.full_name;
    var repoUrl = props.repo.html_url;

    return (
        <tr>
            <td className='cell'>
                {ownerName}
            </td>
            <td className='cell'>
                {ownerUrl}
            </td>
            <td className='cell'>
                {repoName}
            </td>
            <td className='cell'>
                <a href={repoUrl}>{repoUrl}</a>
            </td>
        </tr>
    )
}


export default RepoListEntry;