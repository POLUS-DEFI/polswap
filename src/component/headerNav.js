import React,{Component} from 'react'
// import { createBrowserHistory } from 'history';
import imgUrl from '../images/polus_banner_notext.png'
// const history = createBrowserHistory();
export default class HeaderNav extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentIndex: 1
    };
  }

  componentWillMount () {
  }
  componentDidMount () {
    // history.listen(route => {
    //   console.log(route)
    //   if (route.location.hash) {
    //   }
    // })
  }
  goPage=(index, uri)=>{
    this.setState({
      currentIndex: index
    })
    window.location.href = uri
  }
  render () {
    return (
      <div className="view box">
        <img style={{width: '80px',marginLeft: '15px'}} src={imgUrl} alt="logo"/>
        <div className="rightTout">
          <span className={`container navFirst ${this.state.currentIndex===1?"active":null}`} onClick={() => this.goPage(1, '#/article')}>兑换</span>
          <span className={`container ${this.state.currentIndex===2?"active":null}`} onClick={() => this.goPage(2, '#/guideview')}>资金池</span>
        </div>
      </div>
    )
  }
}
