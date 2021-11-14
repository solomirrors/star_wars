import React, {Component} from "react";
import Spinner from "../spinner";

const withData = (View) => {
    return class extends Component{
        state = {
            dataList: null
        };

        componentDidMount() {
            this.withDataUpdate();
        };

        componentDidUpdate(prevProps, prevState, snapshot) {
            if (this.props.getData !== prevProps.getData){
                this.withDataUpdate();
            }
        }

        withDataUpdate() {
            this.props.getData()
                .then((dataList) => {
                    this.setState({
                        dataList
                    });
                });
        }

        render() {
            const {dataList} = this.state;

            if (!dataList){
                return <Spinner/>
            }

            return <View {... this.props} dataList = {dataList}/>
        }
    }
}
export default withData;