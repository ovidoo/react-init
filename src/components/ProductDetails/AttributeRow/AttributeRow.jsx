import React, {Component} from "react";

class AttributeRow extends Component {

    render() {
        const labels = this.props.keys;
        const car = this.props.car;


        const rows = [];

        labels.forEach((label) => {
            rows.push(
                <tr>
                    <td style={{textAlign: 'left'}}>
                        <label for={label}>{label}</label>
                    </td>
                    <td>
                        <input type="text" id={label}
                               value={this.props.car[label]}
                               style={{padding: '5px', marginTop: '10px', fontSize: '16px'}}
                               disabled={label === 'resource_uri' || label === 'id'} />
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