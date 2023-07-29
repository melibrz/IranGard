import React from 'react';

class TextExpand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
        this.handleExpandClick = this.handleExpandClick.bind(this);
    }

    handleExpandClick() {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        const { text } = this.props;
        const { expanded } = this.state;
        const shortText = text.substring(0, 284); // Change 100 to however many characters you want to display initially
        return (
            <div style={{ width: "95%", margin: "2rem 2.5%", textAlign: "right", backgroundImage: !expanded ? " linear-gradient(to top, rgb(252 252 252 / 1%) 0px, #ededed 100%)" : "", borderRadius: "10px" }}>
                <span>{expanded ? text : shortText}</span>
                {!expanded ?
                    <span style={{ cursor: "pointer", color: "#26B3FB" }} onClick={this.handleExpandClick}>بیشتر بخوانید...</span>
                    :
                    <span style={{ cursor: "pointer", color: "#26B3FB" }} onClick={this.handleExpandClick}>کمتر بخوانید...</span>
                }
            </div>
        );
    }
}

export default TextExpand;
