import React from 'react';
import Navigation from '../../component/navigation';
import Navbar from '../../component/navbar';
import Cardpro from '../../container/Profile/cardpro';
import Tabsprof from '../Profile/tabsprof';
function Profile() {
    return (
        <div>
        <Navigation />
        <Navbar />
        <Cardpro />
        <Tabsprof />
        </div>
    )
}

export default Profile;