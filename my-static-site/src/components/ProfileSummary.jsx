import preferredLanguage from "../utils/preferredLanguage";

function ProfileSummary({ user, repos }) {

    const language = preferredLanguage(repos);

  return (
    <div className="profile-summary">
      <a className="user-title" href={user.html_url}>{user.name}</a>
      <p>Currently Building: Business Website Template</p>
      <p>Public Repositories: {user.public_repos}</p>
      {language && <p>Favorite Language: {language}</p>}

    </div>
  );
}

export default ProfileSummary;