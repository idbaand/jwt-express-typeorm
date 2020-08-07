import React, {Component} from 'react';

class List extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.getList();
    }

    getList = () => {
        fetch('/user')
        .then(res => res.json())
        .then(list => this.setState({list}))
    }

    render() {
        const {list} = this.state;

        return (
            <div className="App">
                <h1>List of Users</h1>
                {/*chec to see if any items are found */}
                {list.length ? (
                    <div>
                    {/*render list of users */}
                    {list.map((item) => {
                        return (
                            <div>
                            {item}
                            </div>
                        )
                    })}
                    </div>
                ): (
                    <div>
                        <h2>No Users Found </h2>
                    </div>
                )
                }
            </div>
        )
    }
}

export default List;