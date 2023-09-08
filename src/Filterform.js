import React from "react";

const Filterform = ({ data, onFilterChange, filters }) => {
  const { show, channel, status } = filters;

  const uniqueShowNames = Array.from(
    new Set(data.map((element) => element.show))
  );
  const showNameOptions = uniqueShowNames.map((showName) => (
    <option key={showName} value={showName}>
      {showName}
    </option>
  ));

  const uniqueChannelNames = Array.from(
    new Set(data.map((element) => element.channel))
  );
  const showChannelOptions = uniqueChannelNames.map((showName) => (
    <option key={showName} value={showName}>
      {showName}
    </option>
  ));

  const uniqueStatusNames = Array.from(
    new Set(data.map((element) => element.status))
  );
  const showStatusOptions = uniqueStatusNames.map((showName) => (
    <option key={showName} value={showName}>
      {showName}
    </option>
  ));

  const handleShowFilterChange = (event) => {
    onFilterChange("show", event.target.value);
  };

  const handleChannelFilterChange = (event) => {
    onFilterChange("channel", event.target.value);
  };

  const handleStatusFilterChange = (event) => {
    onFilterChange("status", event.target.value);
  };

  return (
    <div className="container-fluid">
      <form className="filter-container">
        <h4 className="row justify-content-center mb-1">Refine your results</h4>
        <div className="row">
          <div className="column col-4 col-xs-12">
            <div className="form-group">
              <div className="row-3 col-sm-12">
                <label className="form-label" htmlFor="showname">
                  Show Name
                </label>
              </div>
              <div className="col-9 col-sm-12">
                <select
                  className="form-select"
                  id="showname"
                  value={show}
                  onChange={handleShowFilterChange}
                >
                  <option value="">Select Show Name</option>
                  {showNameOptions}
                </select>
              </div>
            </div>
          </div>
          <div className="column col-4 col-xs-12">
            <div className="form-group">
              <div className="col-3 col-sm-12">
                <label className="form-label" htmlFor="channel">
                  Channel
                </label>
              </div>
              <div className="col-9 col-sm-12">
                <select
                  className="form-select"
                  id="channel"
                  value={channel}
                  onChange={handleChannelFilterChange}
                >
                  <option value="">Select Channel</option>
                  {showChannelOptions}
                </select>
              </div>
            </div>
          </div>
          <div className="column col-4 col-xs-12">
            <div className="form-group">
              <div className="col-3 col-sm-12">
                <label className="form-label" htmlFor="status">
                  Status
                </label>
              </div>
              <div className="col-9 col-sm-12">
                <select
                  className="form-select"
                  id="status"
                  value={status}
                  onChange={handleStatusFilterChange}
                >
                  <option value="">Select Channel</option>
                  {showStatusOptions}
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filterform;
