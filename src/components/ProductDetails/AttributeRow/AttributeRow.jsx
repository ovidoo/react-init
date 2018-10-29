import React, {Component} from "react";

class AttributeRow extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    /*
    * Update only with the changed details
    * */
    handleChange(event) {
        const updateProperty = {[event.target.id]: event.target.value};
        const tempUpdate = Object.assign(this.state.car, updateProperty);

        this.setState({
            car: tempUpdate
        });
        this.props.onCarDetailsChange(this.state.car);
    }

    componentDidMount() {
        let tempObj = {};
        this.props.keys.forEach(key => Object.defineProperty(tempObj, key, {value: ''}) );

        this.setState({
            value: tempObj,
            car: this.props.car
        })
    }

    /*
    * Disable the id & uri field so it can't get updated
    * */
    isDisabled(label) {
        return label === 'resource_uri' || label === 'id';
    }

    render() {
        const labels = this.props.keys;
        const rows = [];

        labels.forEach((label) => {
            const isDisabled = this.isDisabled(label);

            rows.push(
                <tr key={label}>
                    <td style={{textAlign: 'left'}}>
                        <label htmlFor={label}>{label}</label>
                    </td>
                    <td>
                        <input type="text" id={label}
                               value={this.state.value[label]}
                               placeholder={this.props.car[label]}
                               onChange={this.handleChange}
                               style={{padding: '5px', marginTop: '10px', fontSize: '16px'}}
                               disabled={isDisabled} />
                    </td>
                </tr>
            );
        });

        return (
            <tbody>{rows}</tbody>
        )
    }
}

export default AttributeRow