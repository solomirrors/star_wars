import React, {Component} from "react";
import Spinner from "../spinner";

const withData = (View) => {
    return class extends Component {

        state = {
            dataList: null,
            loading: true,
            error: false
        };

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.update();
            }
        }

        componentDidMount() {
            this.update();
        }

        update() {
            this.setState( {
                loading: true,
                error: false
            });

            this.props.getData()
                .then((dataList) => {
                    this.setState({
                        dataList,
                        loading: false
                    });
                })
                .catch(() => {
                    this.setState({
                        error: true,
                        loading: false
                    });
                });
        }


        render() {
            const { dataList, loading, error } = this.state;

            if (loading) {
                return <Spinner />;
            }

            if (error) {
                return <div>Error Component :(</div>;
            }

            return <View {...this.props} dataList={dataList} />;
        }
    };
};

export default withData;