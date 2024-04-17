import React from 'react'
import { useGetAttributes } from '../hooks/index.js'
import { useDataQuery } from '@dhis2/app-runtime'
import {
    Table,
    TableBody,
    TableCell,
    TableCellHead,
    TableRow,
    TableRowHead,
    TableHead,
    CircularLoader,
    NoticeBox,
    CenteredContent,
} from '@dhis2/ui'
const query = {
    attibuteslist: {
        resource: 'attributes',
        params: {
            fields: ['id','displayName', 'created'],
            order: 'created:desc',
        },
    },
}
export const Attributes = () => {
    // we get the data using a custom hook
    // we will update this implementation after learning about app-runtime
    const { loading, error, data } = useDataQuery(query)
    if (loading) {
        return (
            <CenteredContent>
                <CircularLoader />
            </CenteredContent>
        )
    }
    if (error) {
        return <NoticeBox error>{error?.message}</NoticeBox>
    }
    console.log(data)
    return (
        <div>
            <h1>Attributes list</h1>
            
            {
                // if there is any data available
                data?.attibuteslist?.attributes && (
                    <Table>
                        <TableHead>
                            <TableRowHead>
                                <TableCellHead>ID</TableCellHead>
                                <TableCellHead>Name</TableCellHead>
                                <TableCellHead>Created date</TableCellHead>
                            </TableRowHead>
                        </TableHead>
                        <TableBody>
                            {data.attibuteslist.attributes.map(
                                ({ id, displayName, created  }) => (
                                    <TableRow key={id}>
                                        <TableCell>{id}</TableCell>
                                        <TableCell>{displayName}
                                        </TableCell>
                                        <TableCell>{created}
                                        </TableCell>
                                    </TableRow>
                                    
                                )
                            )}
                        </TableBody>
                    </Table>
                )
            }
        </div>
    )
}
