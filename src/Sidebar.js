import React from "react";
import { RefinementList } from "react-instantsearch-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Artists</div>
      <RefinementList
        showMore
        searchable={true}
        operator={"and"}
        limit={10}
        showMoreLimit={50}
        attribute={"artistDisplayName"}
      />
      <div className="sidebar-divider" />
      <div className="sidebar-title">Subjects</div>
      <RefinementList
        showMore
        searchable={true}
        operator={"and"}
        limit={10}
        showMoreLimit={50}
        attribute={"tags"}
      />
    </div>
  );
};

export default Sidebar;
