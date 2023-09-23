'use client'
import { Row, Container, Card } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import { Button, Sa, Sb } from 'sub-components';

const StoringCurrent = () => {
    return (
        (
            <Container fluid className="p-6">
                <PageHeading heading="입고현황" />
                {/* content */}
                <div className="py-6">
                    <div>
                        <Button />
                    </div>
                    
                </div>
            </Container>
        )
    )
}

export default StoringCurrent