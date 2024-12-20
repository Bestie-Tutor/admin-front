import React, {useEffect, useState} from 'react';
import Header from "../../components/Headers/Header";
import {
    Card,
    CardHeader,
    Container,
    Row,
    Table,
} from "reactstrap";
import {getAll} from "../../network/ApiAxios";

const InquiriesTable = () => {

    const [inquiries, setInquiries] = useState([]);

    useEffect(() => {
        const runAsync = async () => {
            const response = await getAll();
            const {data} = response;
            console.log(data.users);
            if (data.success) {
                setInquiries(data.users);
            }
        }
        runAsync();
    }, []);

    return (
        <>
            <Header/>
            <Container>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Inquiries</h3>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Content</th>
                                    <th scope="col">CreatedAt</th>
                                </tr>
                                </thead>
                                <tbody>
                                {inquiries.map(inquiry => (
                                    <tr key={inquiry.email}>
                                        <th scope="row">
                                            {inquiry.name}
                                        </th>
                                        <td>{inquiry.email}</td>
                                        <td>{inquiry.email}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default InquiriesTable;
