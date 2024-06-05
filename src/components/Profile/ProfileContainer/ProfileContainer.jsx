import React from 'react';
import PetForm from "../owner/PetForm/PetForm.jsx";
import ProfileSidebar from "../ProfileSidebar/ProfileSidebar.jsx";

import styles from "./ProfileContainer.module.scss";


const ProfileContainer = () => {
    return (
        <div className={styles.profileContainer}>
            <ProfileSidebar />
            <PetForm/>
        </div>
    );
};

export default ProfileContainer;