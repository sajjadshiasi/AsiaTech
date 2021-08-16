import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="container w-75">
            <div className="row justify-content-center">
          <input
            type="text"
            className=""
            placeholder="شهر مورد نظر"
            aria-label="شهر مورد نظر"
            aria-describedby="button-addon2"
            onChange={this.handleTermChange}
          />
          <div className="input-group-append pt-lg-5 pt-2">
            <button
              className="btn"
              type="button"
              onClick={this.search}
            >
              جست و جو
            </button>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
