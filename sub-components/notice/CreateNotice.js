// import node module libraries
import React from 'react';
import { Col, Row, Card, Table, Form, Tab, Container, Button } from 'react-bootstrap';

// import hooks
import useMounted from 'hooks/useMounted';

import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createNotice } from 'app/api/Notice';
import { useRouter } from "next/navigation";
import { SET_TOKEN } from 'sub-components/auth/token/accessToken';

const CreateNotice = () => {
    const hasMounted = useMounted();

    const router = useRouter();
    
    const dispatch = useDispatch();
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors, isSubmitting, isDirty, isValid },
    } = useForm({ mode: 'onChange' });

    const onSubmit = async data => {
        const response = await createNotice({ title: data.title, body: data.body, category: "공지사항" });
        
    
        const result = response.json;
    
        if (result.code === 'OK') {
          dispatch(SET_TOKEN(result.data.accessToken));
          console.log(result.data.accessToken);
          typeof window !== 'undefined' ? sessionStorage.setItem("accessToken", result.data.accessToken) : null;
          
          router.push("/");
          
        } 
      };
      const onError = errors => console.log(errors);
    
    const textareaStyle = {
      height: '400px', // 원하는 높이로 지정하세요.
    };
	return (
        <Col xl={4} lg={12} md={12} sm={12}>
            <Card>
                <Card.Body>
                    {hasMounted &&
                    <Form onSubmit={handleSubmit(onSubmit, onError)}>

                    <Table className="text-nowrap">
                        <thead className="table-light">
                            <tr>
                                <th scope="col" className='textCenter'>제목</th>
                                <th scope="col">
                                    {/* Username */}
                                    <Form.Group className="mb-3" controlId="title">
                                    <Form.Control 
                                    name="title"
                                    placeholder="제목을 입력하세요" 
                                    required=""
                                    />
                                    </Form.Group>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className='content'>내용</th>
                                <td>
                                    <div className="form-floating">
                                    {/* body */}
                                    <Form.Group className="mb-3" controlId="body">
                                    <Form.Control
                                    as="textarea"
                                    name="body"
                                    placeholder="내용을 입력하세요"
                                    style={{ height: '400px' }}
                                    />
                                    </Form.Group>
                                    </div>
                                </td>
                            </tr>
                            {/* <tr>
                                <th scope="row" className='textCenter'>작성자</th>
                                <td><input class="form-control"></input></td>
                            </tr>
                            <tr>
                                <th scope="row" className='textCenter'>작성일</th>
                                <td><input class="form-control"></input></td>
                            </tr> */}
                        </tbody>
                    </Table>
                    <div>
                        {/* Button */}
                        <div className="d-grid">
                            <Button variant="primary" type='submit' className='createSuccesBtn'>작성완료</Button>
                        </div>
                    </div>
                    
                    </Form>}
                </Card.Body>
            </Card>
        </Col>
	);
};

export default CreateNotice
