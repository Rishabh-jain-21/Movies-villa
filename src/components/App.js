import React from "react";
import { data } from "../data"
import MovieCard from "./MovieCard";
import Navbar from "./Navbar"
class App extends React.Component {
  componentDidMount() {
    //make api call
    //dispatch action
    // subscribe function takes function as argument
    this.props.store.subscribe(() => {
      this.forceUpdate();
    });
    // dispatch function take object as argument
    this.props.store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });
    console.log(this.props.store.getState());
  }
  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App" >
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {movies.map((elm, index) => {
              return <MovieCard movie={elm} key={index} />
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
