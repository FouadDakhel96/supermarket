import React, { Component } from 'react';
import './App.css';
var Barcode = require('react-barcode');

class  DetailCellRenderer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 'https://nana.sa'+props.data.image,
      barcode: props.data.barcode,
      price: props.data.price,
      hideImage:false,
      reArrangeBadges:false,
      reduceFont:false
    }

  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  resize() {
    this.setState({
      hideImage: window.innerWidth <= 1000,
      reArrangeBadges: window.innerWidth <= 530,
      reduceFont: window.innerWidth <= 768
    });
  }
  componentWillMount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  render() {
    return (
      <div style={{flex:1,borderWidth: 1,height: 220,padding: 20,display: 'flex',flexDirection: 'row',margin:10,
        justifyContent: 'space-between',alignItems: 'center'}}>

        <div className="boxShadow" style={{padding: 10,backgroundColor: 'white',borderRadius: 8,display: 'flex',flexDirection: 'column',justifyContent: 'space-between',alignItems: 'center',width: '40%',height: 180}}>
          <div>
            <h1 className="customFont" style={{fontSize: this.state.reduceFont ? 20 : 30}}>صورة المنتج</h1>
          </div>
          <div>
            <img
              src={this.state.image}
              alt="صورة المنتج"
              style={{height: 100,maxWidth: '90%'}}
            />
          </div>
        </div>

        <div className="boxShadow" style={{borderRadius: 8,padding: 10,display: 'flex',flexDirection: 'column',backgroundColor: 'white',width: this.state.hideImage ? '45%' :'25%',height: '100%',alignItems: 'center',justifyContent: 'space-between'}}>
          <h1 className="customFont"style={{fontSize: this.state.reduceFont ? 20 : 30}}>الباركود</h1>
        <Barcode value={this.state.barcode} format={this.state.barcode.length===13 ? "EAN13" : this.state.barcode.length===8 ? "EAN8" : "UPC"} width={this.state.reduceFont ? 1 : 2}/>
        </div>

        {
          this.state.hideImage
          ?
          null
          :
          <div className="boxShadow" style={{backgroundColor: 'white',borderRadius: 8,padding: 10,display: 'flex',flexDirection: 'column',width: this.state.hideImage ? '45%' :'25%',height: '100%',alignItems: 'center',justifyContent: 'space-between'}}>
            <h1 className="customFont">السعر</h1>
            <div style={{height: '70%',display: 'flex',flexDirection: 'row'}}>
              {/* <h3 className="customFont">ريال</h3> */}
              <h3 className="customFont2">{this.state.price}</h3>
            </div>
          </div>
        }


      </div>
    );
  }

}

export default DetailCellRenderer;
