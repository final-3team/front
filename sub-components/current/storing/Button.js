import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Sa, Sb } from 'sub-components';

const Button = () => {
    
    return (
        <div>
            <ButtonGroup>
                <DropdownButton
                    as={ButtonGroup}
                    title="지역"
                    id='bg-nested-dropdown'
                >
                    <Dropdown.Item eventKey="1" onClick={()=>Sa}>서울-A</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={()=>Sb}>서울-B</Dropdown.Item>
                    <Dropdown.Item eventKey="3">대전-A</Dropdown.Item>
                    <Dropdown.Item eventKey="4">대전-B</Dropdown.Item>
                    <Dropdown.Item eventKey="5">부산-A</Dropdown.Item>
                    <Dropdown.Item eventKey="6">부산-B</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>

        </div>

    )
}

export default Button