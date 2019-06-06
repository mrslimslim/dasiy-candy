import { observable, action } from 'mobx'

class PlayGround {
    @observable data = {
        name: ''
    };

    changeName = (value) =>{
        this.data.name = value
    }
}

export default new PlayGround();