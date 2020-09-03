import React, {Component} from 'react';
 import ReactTable from "react-table-6";
import "react-table-6/react-table.css";


class MyTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeCol: '',
            resizing: false,

        }
    }

    componentDidUpdate(props, state) {
        if (this.state.resizing && !state.resizing) {
            document.addEventListener('mouseup', this.onMouseUp);
        } else if (!this.state.resizing && state.resizing) {
            document.removeEventListener('mouseup', this.onMouseUp);
        }
    }

    onMouseUp = (evt) => {
        this.setState({
            activeCol: '',
            resizing: false
        });
        evt.stopPropagation();
        evt.preventDefault();
    }
    render() {
        const data = [{
            name:"Mark",
            age:24
        },
            {
                name:"Derek",
                age:26
            }]

        const columns = [{
            Header: 'Name',
            accessor: 'name', // String-based value accessors!,
            headerClassName: 'hdrCls',
            className: (this.state.activeCol === 'name') && this.state.resizing ? 'borderCellCls' : 'defaultCellCls'
        }, {
            Header: 'Age',
            accessor: 'age',
            headerClassName: 'hdrCls',
            className: (this.state.activeCol === 'age') && this.state.resizing ? 'borderCellCls' : 'defaultCellCls'
        }];

        return <ReactTable
            data = { data }
            columns = { columns }
            showPagination= {false}
            onResizedChange={(newResized, event) => {
                let resizedCol = newResized.slice(-1)[0].id;
                if(this.state.activeCol !== resizedCol) {
                    this.setState({
                        activeCol: resizedCol,
                        resizing: true
                    })
                }
            }}
        />
    }
}

export default MyTable;