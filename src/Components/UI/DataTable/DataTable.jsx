import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const AppDataTable = (dataset=[]) => {
  const [globalFilter, setGlobalFilter] = useState("");
  //console.log(dataset);


  const handleEdit = (rowData) => {
    console.log("Edit clicked for:", rowData);
  };

  const handleDelete = (rowData) => {
    console.log("Delete clicked for:", rowData);
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex gap-2">
        <Button icon="pi pi-pencil" className="p-button-rounded p-button-info" onClick={() => handleEdit(rowData)} />
        <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => handleDelete(rowData)} />
      </div>
    );
  };


  const tableConfig = [
    { field: "id", label: "ID", sortable: true },
    { field: "aadharid", label: "Aadhaar ID", sortable: true },
    { field: "name", label: "Full Name", sortable: true },
    { field: "age", label: "Age", sortable: true },
    { field: "aadhaaraddress", label: "Aadhaar Address" },
    { field: "currentaddress", label: "Current Address" },
    { field: "scheme", label: "Scheme Name" },
    { field: "noofplant", label: "Number of Plants" },
    { field: "documentlink", label: "Document Link" },
    { field: "nooffamilynumber", label: "Number of Family Members" },
    { field: "isapproved", label: "Approval Status" },
    { field: "email", label: "Email Address" },
    { field: "phonenumber", label: "Phone Number" },
    { field: "usertype", label: "User Type" },
    { field: "accountstatus", label: "Account Status" }
  ];
  
  return (
    <div className="card">
        <div className="w-72">
            <InputText
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
            className="mb-3"
        />
        </div>
        
      <DataTable value={Array.isArray(dataset.dataset) ? dataset.dataset : []} showGridlines stripedRows paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }} globalFilter={globalFilter} globalFilterFields={['name', 'city']} emptyMessage="No records found"> 
        {tableConfig.map((col, index) => (
          <Column key={index} field={col.field} header={col.label} sortable={col.sortable || false} />
        ))}
        <Column header="Actions" body={actionBodyTemplate} />
      </DataTable>
    </div>
  );
};

export default AppDataTable;
