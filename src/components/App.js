import { Fragment, useEffect } from "react"
import { connect } from "react-redux"
import { handleInitialData } from "../actions/shared"
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar"
import NewTweet from "./NewTweet"
import TweetPage from "./TweetPage"
import { Routes, Route } from "react-router-dom"
import Nav from "./Navigation"


const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData())
  })
  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Nav />
        {props.loading === true ? null : (
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/tweet/:id" exact element={<TweetPage />} />
            <Route path="/new" exact element={<NewTweet />} />
          </Routes>
        )}
      </div>
    </Fragment>
  )

};
const mapsStateToProps = ({ authedUser }) => (
  { loading: authedUser === null }
)

export default connect(mapsStateToProps)(App);
