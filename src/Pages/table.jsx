import React from "react"

export default class Table extends React.Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "1rem auto" }}>
                <p className="topic">درباره این اقامتگاه در شیراز، نزدیک شاه چراغ</p>
                <table style={{ width: "50%", margin: "auto 2.5%", textAlign: 'right' }}>
                    {this.props.tableItems.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th><img src={item.icon} width="35px" style={{opacity:"70%",marginLeft:"1rem"}}/>{item.topic}</th>
                                <td>{item.status}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}