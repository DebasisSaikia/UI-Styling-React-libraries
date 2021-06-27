import React, {useEffect, useState} from 'react';
import PlaceholderPro from '../placeholders/PlaceholderPro';

const Profile = () => {
  const [profile, setProfile] = useState (null);

  useEffect (() => {
    setTimeout (async () => {
      const res = await fetch ('https://jsonplaceholder.typicode.com/users/1');
      const data = await res.json ();
      setProfile (data);
    }, 5000);
  }, []);

  return (
    <div className="user">
      <h2>User Profile</h2>
      {profile &&
        <div className="profile">
          <h3 className="font-bold">{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>
            {profile.website}
          </a>
        </div>}
      {!profile && <PlaceholderPro />}
    </div>
  );
};

export default Profile;
