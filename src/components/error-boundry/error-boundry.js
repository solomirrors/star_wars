import React, {Component} from "react";

const ShowComponentError = (
    <div>
        <span>Component Error. Sorry :(</span>
    </div>
)

export default class ErrorBoundry extends Component{
    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError)
            return <ShowComponentError/>

        return this.props.children;
    };
}