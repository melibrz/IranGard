import "../../Styles/modal.css"
import React from "react";

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }
    open() {
        this.setState({ isOpen: true });
    }
    close() {
        this.setState({ isOpen: false });
    }
    render() {
        const { isOpen } = this.state;
        return (
            <div style={{ display: isOpen ? 'block' : 'none' }} className={`Modal${isOpen ? 'Modal--open' : ''}`}>
                <div className="Modal__overlay">
                    <div className='Modal__content' >
                        <div className='Modal__header' >
                            <h2 className="Modal__title">{this.props.title}</h2>
                            <button className="Modal__close-btn" onClick={() => this.close()}>
                                X
                            </button>
                        </div>
                        <div className="Modal__body">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

