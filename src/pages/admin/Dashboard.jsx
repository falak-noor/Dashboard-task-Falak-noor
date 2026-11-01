import { PageTitle } from '../../components/common/PageTitle';
import { KpiCard } from '../../components/common/KpiCard';
import { useNavigation } from '../../context/useNavigation';

export const Dashboard = () => {
  const { user } = useNavigation();

  return (
    <div className="space-y-6">
      {/* 1. Page Title & Description matching reference */}
      <PageTitle
        title={`Welcome Back, ${user?.name ? user.name.split(' ')[0] : 'Falak'}!`}
        subtitle="Here is an overview of your User & Access Management System"
      />

      {/* 2. Primary KPI Cards Grid matching reference */}
      <section aria-label="Key Performance Indicators">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <KpiCard
            title="Total Users"
            value="128"
            change="+12%"
            isPositive={true}
            comparison="+26 from last month"
            iconType="user"
          />

          <KpiCard
            title="Active Users"
            value="196"
            change="8%"
            isPositive={true}
            comparison="+14 from last month"
            iconType="users"
          />

          <KpiCard
            title="Total Revenue"
            value="196"
            change="↓ 5%"
            isPositive={false}
            comparison="-3 from last month"
            iconType="revenue"
          />

          <KpiCard
            title="Total Orders"
            value="182"
            change="15%"
            isPositive={true}
            comparison="+24 from last month"
            iconType="orders"
          />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
