'use client'
import React from "react";
import { Row, Container } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import Button from 'react-bootstrap';
import {Current} from 'sub-components';

const Contract = () => {
    

    return (
        <Container fluid className="p-6">
            <PageHeading heading="계약현황" />


            <div className="py-6">
             <Current/>
            </div>

        </Container>
    )

}

export default Contract