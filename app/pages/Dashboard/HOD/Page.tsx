import { Link } from "react-router-dom";
import { ClipboardList, Clock, CheckCircle2, UserCheck, AlertCircle } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { DataTable } from "@/components/DataTable";
import { StatusBadge } from "@/components/StatusBadge";
import { PriorityBadge } from "@/components/PriorityBadge";
import { serviceRequests } from "@/data/serviceRequests";

const HodDashboard = () => {
  // Filter requests for IT department (HOD's department)
  const deptRequests = serviceRequests.filter((r) => r.departmentId === 1);

  const stats = {
    total: deptRequests.length,
    pendingApproval: deptRequests.filter((r) => r.statusColor === "pending").length,
    assigned: deptRequests.filter((r) => r.assignedToId !== null).length,
    inProgress: deptRequests.filter((r) => r.statusColor === "in-progress").length,
  };

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
      key: "requestorName",
      header: "Requestor",
      render: (item: typeof serviceRequests[0]) => (
        <div>
          <span className="block">{item.requestorName}</span>
          <span className="text-xs text-muted-foreground">{item.requestorDept}</span>
        </div>
      ),
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
      key: "assignedToName",
      header: "Assigned To",
      render: (item: typeof serviceRequests[0]) => (
        <span className={item.assignedToName ? "text-foreground" : "text-muted-foreground"}>
          {item.assignedToName || "Not Assigned"}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      render: (item: typeof serviceRequests[0]) => (
        <div className="flex gap-2">
          {!item.assignedToId && (
            <button className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Assign
            </button>
          )}
          <button className="px-3 py-1 text-xs font-medium bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors">
            View
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div>
        <h1 className="page-title">HOD Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Manage and assign department service requests
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Total Dept Requests"
          value={stats.total}
          icon={ClipboardList}
          variant="primary"
        />
        <DashboardCard
          title="Pending Approval"
          value={stats.pendingApproval}
          icon={AlertCircle}
          variant="warning"
        />
        <DashboardCard
          title="Assigned"
          value={stats.assigned}
          icon={UserCheck}
          variant="info"
        />
        <DashboardCard
          title="In Progress"
          value={stats.inProgress}
          icon={Clock}
          variant="success"
        />
      </div>

      {/* Department Requests */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="section-title">Department Requests (IT)</h2>
          <Link to="/hod/requests" className="text-sm text-primary hover:underline">
            View all
          </Link>
        </div>
        <DataTable
          data={deptRequests}
          columns={columns}
          onRowClick={(item) => (window.location.href = `/requests/${item.id}`)}
        />
      </div>
    </div>
  );
};

export default HodDashboard;
