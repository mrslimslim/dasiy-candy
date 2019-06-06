import React, { Component } from 'react'
import { Input } from 'antd'
import { observer, inject } from 'mobx-react'
import { hot } from 'react-hot-loader'

@inject('playGroundStore')
@observer    
class PlayGround extends Component {
    componentDidMount(){
        console.log(this.props)
        console.log('componentDidMount')
    }
    
    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate')
        return null;
    }
    
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    
    onChange =(e)=>{
      const { playGroundStore } = this.props;
      console.log(playGroundStore);
      playGroundStore.changeName(e.target.value)
    }
    
    render() {
        const { playGroundStore } = this.props;
        return (
            <div>
                <Input value={playGroundStore.data.name} onChange={this.onChange}/>
            </div>
        )
    }
}


export default PlayGround;
