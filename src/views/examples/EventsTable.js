import React, {useEffect, useState} from 'react';
import Header from "../../components/Headers/Header";
import {
    Card,
    CardHeader,
    Container,
    Row,
    Table,
    Col,
    Button
} from "reactstrap";
import {getAll} from "../../network/ApiAxios";
import {useHistory} from "react-router-dom";

const EventsTable = () => {
    const history = useHistory();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const runAsync = async () => {
            const response = await getAll();
            const {data} = response;
            console.log(data.users);
            if (data.success) {
                setEvents(data.users);
            }
        }
        runAsync();
    }, []);

    return (
        <>
            <Header/>
            <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">Events</h3>
                                    </Col>
                                    <Col className="text-right" xs="4">
                                        <Button
                                            color="primary"
                                            onClick={() => history.push('/admin/event-management', { add: true })}
                                            size="sm"
                                        >
                                            Add
                                        </Button>
                                    </Col>
                                </Row>
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
                                {events.map(event => (
                                    <tr class="click-th" key={event.email} onClick={() => history.push('/admin/event-management', { event })}>
                                        <th scope="row">
                                            {event.name}
                                        </th>
                                        <td>{event.email}</td>
                                        <td>{event.email}</td>
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

export default EventsTable;
