import React, {Component} from "react";
import Spinner from "../spinner";

const withData = (View, getData) => {
    return class extends Component{
        state = {
            dataList: null
        };

        componentDidMount() {

            getData()
                .then((dataList) => {
                    this.setState({
                        dataList
                    });
                });
        };

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