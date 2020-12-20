import React,{Component} from 'react'
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import Article from '../component/article'
import GuideView from '../component/guideView'
class RouterMap extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }


  render() {
    return (
      <div className="page-content">
        <Route exact path="/guideview"  component={GuideView}/>
        <Route exact path="/article" component={Article}/>
        <Route exact path="/"  component={GuideView}/>
      </div>
    )
  }


}

export default RouterMap
