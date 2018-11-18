import React, { Component } from "react";
import { getWOW } from "./service.js";

const WOWContext = React.createContext();

class WOWStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wow: [],
      isLoader: true,
      apiCount: 0,
      likesCount: 0
    };
  }

  componentDidMount = () => {
    this.getWOW();
  };

  getWOW = data => {
    this.setLoaderState(true);
    getWOW(data).then(resData => {
      this.setState({
        wow: resData.data,
        wowFilterData: resData.data
      });
      this.setLoaderState(false);
      this.setState({ ...this.state, apiCount: this.state.apiCount + 1 });
      this.getTotalLikesCount(resData.data);
    });
  };

  setLoaderState = boolValLoader => {
    this.setState({ isLoader: boolValLoader });
  };

  updateRecords = searchVal => {
    const wowRecords = this.state.wowFilterData.slice();
    const searchWorRecords = wowRecords.filter(wow =>
      wow.place.toLowerCase().includes(searchVal)
    );
    this.setState({ wow: searchWorRecords }, () =>
      this.getTotalLikesCount(searchWorRecords)
    );
  };

  getTotalLikesCount = wowRecords => {
    const totalLikeCount = wowRecords.reduce((cur, pre) => {
      return cur + parseInt(pre.likes, 10);
    }, 0);
    this.setState({ ...this.state, likesCount: totalLikeCount });
  };

  render() {
    return (
      <WOWContext.Provider
        value={{
          ...this.state,
          getWOW: this.getWOW,
          updateRecords: this.updateRecords
        }}
      >
        {this.props.children}
      </WOWContext.Provider>
    );
  }
}

export { WOWStore };
export default WOWContext;
