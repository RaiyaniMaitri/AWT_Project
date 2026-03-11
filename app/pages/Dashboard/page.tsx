import { Link } from "react-router-dom";
import {
  ClipboardList,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  TrendingUp,
  Users,
  Building2,
} from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { DataTable } from "@/components/DataTable";
import { StatusBadge } from "@/components/StatusBadge";
import { PriorityBadge } from "@/components/PriorityBadge";
import { serviceRequests } from "@/data/serviceRequests";

const Dashboard = () => {
  const stats = {
    total: serviceRequests.length,
    pending: serviceRequests.filter((r) => r.statusColor === "pending").length,
    inProgress: serviceRequests.filter((r) => r.statusColor === "in-progress").length,
    completed: serviceRequests.filter((r) => r.statusColor === "completed").length,
    closed: serviceRequests.filter((r) => r.statusColor === "closed").length,
  };

  const recentRequests = serviceRequests.slice(0, 5);

  const columns = [
    {
      key: "ticketNumber",
      header: "Ticket #",
      render: (item: typeof serviceRequests[0]) => (
        <Link
          to={`/requests/${item.id}`}
          className="font-medium text-primary hover:underline"
        >
          {item.ticketNumber}
        </Link>
      ),
    },
    {
      key: "title",
      header: "Title",
      render: (item: typeof serviceRequests[0]) => (
        <span className="font-medium text-foreground">{item.title}</span>
      ),
    },
    {
      key: "departmentName",
      header: "Department",
    },
    {
      key: "priority",
      header: "Priority",
      render: (item: typeof serviceRequests[0]) => (
        <PriorityBadge priority={item.priority} />
      ),
    },
    {
      key: "statusName",
      header: "Status",
      render: (item: typeof serviceRequests[0]) => (
        <StatusBadge status={item.statusColor}>{item.statusName}</StatusBadge>
      ),
    },
    {
      key: "createdAt",
      header: "Created",
      render: (item: typeof serviceRequests[0]) => (
        <span className="text-muted-foreground">
          {new Date(item.createdAt).toLocaleDateString()}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Overview of service request management system
          </p>
        </div>
        <Link to="/requestor/create-request" className="btn-primary inline-flex items-center gap-2">
          <ClipboardList className="w-4 h-4" />
          New Request
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <DashboardCard
          title="Total Requests"
          value={stats.total}
          icon={ClipboardList}
          variant="primary"
          trend={{ value: 12, isPositive: true }}
        />
        <DashboardCard
          title="Pending"
          value={stats.pending}
          icon={AlertCircle}
          variant="warning"
        />
        <DashboardCard
          title="In Progress"
          value={stats.inProgress}
          icon={Clock}
          variant="info"
        />
        <DashboardCard
          title="Completed"
          value={stats.completed}
          icon={CheckCircle2}
          variant="success"
        />
        <DashboardCard
          title="Closed"
          value={stats.closed}
          icon={XCircle}
          variant="default"
        />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="dashboard-card flex items-center gap-4">
          <div className="p-3 rounded-xl bg-primary/10">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Avg. Resolution Time</p>
            <p className="text-xl font-bold text-foreground">4.2 hours</p>
          </div>
        </div>
        <div className="dashboard-card flex items-center gap-4">
          <div className="p-3 rounded-xl bg-success/10">
            <Users className="w-6 h-6 text-success" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Active Technicians</p>
            <p className="text-xl font-bold text-foreground">8</p>
          </div>
        </div>
        <div className="dashboard-card flex items-center gap-4">
          <div className="p-3 rounded-xl bg-info/10">
            <Building2 className="w-6 h-6 text-info" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Departments</p>
            <p className="text-xl font-bold text-foreground">6</p>
          </div>
        </div>
      </div>

      {/* Recent Requests */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="section-title">Recent Requests</h2>
          <Link to="/requestor/my-requests" className="text-sm text-primary hover:underline">
            View all
          </Link>
        </div>
        <DataTable
          data={recentRequests}
          columns={columns}
          onRowClick={(item) => (window.location.href = `/requests/${item.id}`)}
        />
      </div>
    </div>
  );
};

export default Dashboard;
