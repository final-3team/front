'use client'
import { Row, Container, Card } from 'react-bootstrap';
import { List1, List2 } from 'sub-components';
import { PageHeading } from 'widgets';
import BasicData from 'data/dashboard/basicdate';
import Button from 'react-bootstrap';


const Estimate = () => {
    return (
        <Container fluid className="p-6">
            <PageHeading heading="견적서 작성" />
            {/* content */}
            <div className="py-6">

                <List1 />
                <List2 />

            </div>
        </Container>
    )
}

export default Estimate