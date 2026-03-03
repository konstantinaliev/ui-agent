import React from 'react';
import { LinkCreationForm } from './LinkCreationForm';
import { StatisticsCard } from './StatisticsCard';
import { ReferralLinksManagement } from './ReferralLinksManagement';

const Dashboard = () => {
    return (
        <div>
            <h1>Referral Links Dashboard</h1>
            <StatisticsCard />
            <ReferralLinksManagement />
            <LinkCreationForm />
        </div>
    );
};

export default Dashboard;
