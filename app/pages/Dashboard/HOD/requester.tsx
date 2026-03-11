import { useState } from "react";
import { Link } from "react-router-dom";
import { DataTable } from "@/components/DataTable";
import { StatusBadge } from "@/components/StatusBadge";
import { PriorityBadge } from "@/components/PriorityBadge";
import { Modal } from "@/components/Modal";
import { FormSelect } from "@/components/FormSelect";
import { serviceRequests } from "@/data/serviceRequests";
import { serviceDeptPersons } from "@/data/serviceDeptPerson";
import { Filter, UserCheck } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const HodRequests = () => {
  const [filterStatus, setFilterStatus] = useState("all");
  const [assignModal, setAssignModal] = useState<{ isOpen: boolean; requestId: number | null }>({
    isOpen: false,
    requestId: null,
  });
  const [selectedTechnician, setSelectedTechnician] = useState("");

  // Filter requests for IT department
  let deptRequests = serviceRequests.filter((r) => r.departmentId === 1);

  if (filterStatus !== "all") {
    deptRequests = deptRequests.filter((r) => r.statusColor === filterStatus);
  }

  // Get technicians for the department
  const technicians = serviceDeptPersons.filter((p) => p.departmentId === 1);

  const handleAssign = () => {
    toast({
      title: "Technician Assigned",
      description: "The request has been assigned successfully.",
    });
    setAssignModal({ isOpen: false, requestId: null });
    setSelectedTechnician("");
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
        <div>
          <span className="font-medium text-foreground block">{item.title}</span>
          <span className="text-xs text-muted-foreground">{item.requestTypeName}</span>
        </div>
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
      key: "createdAt",
      header: "Created",
      render: (item: typeof serviceRequests[0]) => (
        <span className="text-muted-foreground">
          {new Date(item.createdAt).toLocaleDateString()}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      render: (item: typeof serviceRequests[0]) => (
        <div className="flex gap-2">
          {!item.assignedToId && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setAssignModal({ isOpen: true, requestId: item.id });
              }}
              className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-1"
            >
              <UserCheck className="w-3 h-3" />
              Assign
            </button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div>
        <h1 className="page-title">All Department Requests</h1>
        <p className="text-muted-foreground mt-1">
          Manage all service requests for IT Department
        </p>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Filter:</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {[
            { value: "all", label: "All" },
            { value: "pending", label: "Pending" },
            { value: "in-progress", label: "In Progress" },
            { value: "completed", label: "Completed" },
            { value: "closed", label: "Closed" },
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setFilterStatus(filter.value)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filterStatus === filter.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Requests Table */}
      <DataTable
        data={deptRequests}
        columns={columns}
        onRowClick={(item) => (window.location.href = `/requests/${item.id}`)}
      />

      {/* Assign Modal */}
      <Modal
        isOpen={assignModal.isOpen}
        onClose={() => setAssignModal({ isOpen: false, requestId: null })}
        title="Assign Technician"
        size="sm"
      >
        <div className="space-y-4">
          <FormSelect
            label="Select Technician"
            options={technicians.map((t) => ({
              value: t.id,
              label: `${t.name} (${t.role})`,
            }))}
            placeholder="Choose a technician"
            value={selectedTechnician}
            onChange={(e) => setSelectedTechnician(e.target.value)}
            required
          />
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setAssignModal({ isOpen: false, requestId: null })}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button onClick={handleAssign} className="btn-primary">
              Assign
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HodRequests;
