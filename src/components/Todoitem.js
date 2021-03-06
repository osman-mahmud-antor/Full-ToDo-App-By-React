import React, { Component } from 'react';

class Todoitem extends Component {
    render() {
        const {title,handleDelete} = this.props;
        return (
            <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
                <h6>{title}</h6>
                <div className='todo-icon'>
                    {/* <span className='mx-2 text-success'>
                        <i className='fa fa-pencil' />
                    </span> */}
                    <span className='mx-2 text-danger' onClick={handleDelete}>
                        <i className='fa fa-trash' />
                    </span>
                </div>
            </li>
        );
    }
}

export default Todoitem;