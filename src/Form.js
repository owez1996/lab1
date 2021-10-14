import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            firstname:'',
            lastname: '',
            email: '',
            id: 0
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value ,id} = event.target;

        this.setState({
            [name] : value,
            [id]: value
        });
    }

          OnClikUp = () =>{
            this.setState(prevState => ({
              id: prevState.id+1
            }));
        }
    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, lastname,email } = this.state; 

        return (
            <from onSumbit={this.onForSumbit}>
                <button type="sumbit"
                onClick ={this.onClickUp}
                >
                    Add User
                    </button>
                    <label for= "firstname">firstname</label>
                    <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={firstname}
                    onChange={this.handleChange}/>
                    <label for = "lastname">Lastname</label>
                    <input
                     type="text"
                     name="lastname"
                     id="lastname"
                     value={lastname}
                     onChange={this.handleChange}/>
                     <label for = "email">Email</label>
                     <input
                     type="text"
                     name="email"
                     id="email"
                     value={email}
                     onChange={this.handlechange} />
            </from>
        );
    }
}

export default Form;
