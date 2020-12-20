'use strict';
import React, {Component} from 'react';
import { Card, WingBlank, WhiteSpace, Icon,Modal, SearchBar, List, Flex} from 'antd-mobile';
const Item = List.Item;
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val01: '',
      val02: '',
      modal1: false
    }
  };
  componentDidMount(){
  }
  componentDidMount () {
    console.log(this.props.match)
  }
  handleChange(e){
    this.setState({
      val01: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      val02: e.target.value
    })
  }
  onClose = key => () => {
    this.setState({
      [key]: false
    });
  }
  showModal(){
    this.setState({
      modal1: true
    });
  }
  render() {
    return (
      <div>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Body>
              <div className="flex-center fontSize am-center">
                <div className="header">
                  <div className="from" style={{marginTop: '20px'}}>
                    <div className="cst-border color">
                      <div className="am-flexbox am-flexbox-align-center">
                        <div className="am-flexbox-item" style={{flex: '1 1 0%'}}>Input</div>
                        <div className="am-flexbox-item" style={{flex: '1 1 0%'}}>
                          <div className="text-right color2 cst-balance"></div>
                        </div>
                      </div>
                      <div className="am-flexbox am-flexbox-align-center">
                        <div className="am-flexbox-item" style={{flex: '2 1 0%'}}>
                          <div>
                            <div className="am-list-item am-input-item am-list-item-middle">
                              <div className="am-list-line">
                                <div className="am-input-control"><input placeholder="0.0" className="h5numInput"
                                                                         type="number" value={this.state.val01} onChange={this.handleChange.bind(this)} /></div>
                                {/*<div className="am-input-extra">*/}
                                  {/*<div className="max">MAX</div>*/}
                                {/*</div>*/}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="am-flexbox-item" style={{flex: '1 1 0%'}} onClick={() => this.showModal()}>
                          <div style={{textAlign: 'right'}}><span>ETH</span><Icon style={{verticalAlign: 'bottom'}} type="down" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="am-flexbox am-flexbox-align-center">
                      <div className="am-flexbox-item" style={{textAlign: 'center', margin: '10px 0px'}}>
                        <span style={{fontSize: '30px'}}> + </span>
                      </div>
                    </div>
                    <div className="cst-border color">
                      <div className="am-flexbox am-flexbox-align-center" style={{height: '30%'}}>
                        <div className="am-flexbox-item" style={{flex: '1 1 0%'}}>Input</div>
                        <div className="am-flexbox-item" style={{flex: '1 1 0%'}}>
                          <div className=" text-right color2"></div>
                        </div>
                      </div>
                      <div className="am-flexbox am-flexbox-align-center" style={{height: '70%'}}>
                        <div className="am-flexbox-item" style={{flex: '2 1 0%'}}>
                          <div className="align-items">
                            <div className="am-list-item am-input-item am-list-item-middle">
                              <div className="am-list-line">
                                <div className="am-input-control"><input placeholder="0.0" className="h5numInput"
                                                                         type="number" value={this.state.val02} onChange={this.handleChange2.bind(this)} /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="am-flexbox-item" style={{flex: '1 1 0%'}} onClick={() => this.showModal()}>
                          <div style={{textAlign: 'right'}}><span>Select </span><Icon style={{verticalAlign: 'bottom'}} type="down" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Card style={{margin: '20px 0'}}>
                    <Card.Header
                      title="Initial prices and pool share"
                    />
                    <Card.Body>
                      <Flex>
                        <Flex.Item style={{textAlign: 'center'}}>-</Flex.Item>
                        <Flex.Item style={{textAlign: 'center'}}>-</Flex.Item>
                      </Flex>
                      <WhiteSpace />
                      <Flex>
                        <Flex.Item style={{textAlign: 'center'}}>CRV per AMPL</Flex.Item>
                        <Flex.Item style={{textAlign: 'center'}}>AMPL per CRV</Flex.Item>
                      </Flex>
                      <WhiteSpace />
                      <Flex>
                        <Flex.Item style={{textAlign: 'center'}}>0%</Flex.Item>
                      </Flex>
                    </Card.Body>
                    <WhiteSpace />
                    <Card.Footer content="Share of Pool" />
                    <WhiteSpace />
                  </Card>
                  <div className="text-center"><a style={{background: 'rgb(220,220,220)',color: 'rgb(0,0,0)', border: 'none'}} role="button"
                                                  className="am-button am-button-primary"><span>打包完成</span></a></div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <WhiteSpace size="lg" />
          <Modal
            visible={this.state.modal1}
            transparent
            closable={true}
            className="dialog"
            maskClosable={false}
            onClose={this.onClose('modal1')}
            title="Select a token"
          >
            <SearchBar placeholder="Search" maxLength={8} />
            <Card>
              <Card.Header
                title="Token Name"
              />
              <Card.Body>
                <List className="my-list">
                  <Item thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png">ETH</Item>
                  <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png">0×BTC</Item>
                  <Item thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png">aDAI</Item>
                  <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png">AMN</Item>
                  <Item thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png">AMPL</Item>
                </List>
              </Card.Body>
              <Card.Footer content={<div><img style={{verticalAlign: 'middle',marginRight: '10px'}} width="22px" height="22px" src="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" alt=""/>Uniswap Default List</div>} extra={<div>Change</div>} />
            </Card>
          </Modal>
        </WingBlank>
      </div>
    )
  }
}
