import React, { Component } from 'react'
import classnames from 'classnames'
import SendButton from 'components/SendButton.jsx'
import 'styles/style.css'

class ContactForm extends Component {   
    constructor(props) {
        super(props)
        this.state = {email: '', message: ''}        
        this.handlePassChange = this.handlePassChange.bind(this)
    }
    
    
    // Bind function explicitely in the constructor
    handlePassChange(event) {
        this.setState({email: event.target.value})
        // console.log(event.target.value, this)
    }

    // Bind using an arrow function
    handlePassRepeatChange = event => this.setState({message: event.target.value})
    handleSend = event => {
        if(this.state.message == '' || this.state.email == '' ){
            alert('Email and password cannot be blank')
        }
        else{
        alert(`Dear ${this.state.email}, Your message : "${this.state.message}" was sent to our team`)
        this.setState({email: '', message: ''})
        }
    }

    render() {

        const sendMessage = () => {
            return 'Send'
        }

        let button = <SendButton text={sendMessage()} onClick={this.handleSend}/> 

        return (
            <div className={classnames('ContactForm', this.props.className)}>
                <h1>TELL US YOUR OPINION AND RECOMMENDATIONS</h1>
                
                <input type="email" placeholder="Email (required)"
                    className={null} 
                    value={this.state.email}
                    onChange={this.handlePassChange}
                />

                <textarea type="text" placeholder="Enter the message"
                    className={null}
                    value={this.state.message}
                    onChange={this.handlePassRepeatChange}
                />

                { button }
            </div>
        )
    }
}

export default ContactForm