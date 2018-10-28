import React, {Component} from "react";

class AttributeRow extends Component {

    render() {
        const labels = this.props.keys;
        const car = this.props.car;


        const rows = [];

        labels.forEach((label) => {
            rows.push(
                <tr>
                    <td>
                        <label for={label}>{label}</label>
                    </td>
                    <td>
                        <input type="text" id={label} value={this.props.car[label]} disabled={label === 'resource_uri'} />
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