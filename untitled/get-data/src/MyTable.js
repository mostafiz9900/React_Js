import React, {Component} from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"


class MyTable extends Component {

    render() {
        const  tabldata=[]


        const col=[
            {Header:"name",accessor: ""},
            {Header:"age",accessor: ""}

        ]
        return (
            <div>
                <ReactTable>
                    data={tabldata}
                    columns={col}
                    defaultPageSize={2}
                    pageSizeOptions={[2,4,6,8,10]}
                </ReactTable>
            </div>
        );
    }
}

export default MyTable;