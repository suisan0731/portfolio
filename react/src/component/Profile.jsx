import React from 'react';
import '../css/Profile.css';
import ProfileImage from '../images/profile.png';
import ProfileText from './ProfileText';

function Profile({profileTexts}) {
    return (
        <div className="profile">
            <div className="profile-header">
                <h2 className="fs-1">Profile</h2>
                <p>- プロフィール -</p>
            </div>
            <div className="d-md-flex flex-row profile-info">
                <div>
                    <img src={ProfileImage} alt="profile.png" className="rounded mx-auto d-block border border-1 profile-image"></img>
                    <p className="text-center fs-5 mt-3 ms-0 text-dark">大井 祥伍</p>
                    <p className="text-center fs-6 mt-1 ms-0 text-dark">Oi Shogo</p>
                </div>
                <div className="m-4 profile-text">
                    <ul>
                        {profileTexts && profileTexts.map((profileText) => <ProfileText text={profileText.text} key={profileText.id}/>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Profile;