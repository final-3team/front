'use client'

import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
//import { HiLockClosed } from 'react-icons/hi'
//import { ErrorMessage } from '@hookform/error-message';

import { loginUser } from 'app/api/User';
import { SET_TOKEN } from 'sub-components/auth/token/accessToken';
import { setRefreshToken } from 'sub-components';

// import node module libraries
import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';

// import hooks
import useMounted from 'hooks/useMounted';
import { ColorSchemesCode } from 'data/code/NavbarsCode';
import { colorBrewer } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';

const SignIn = () => {
  const hasMounted = useMounted();
  const h1style = {
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'blue'
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, setValue, formState: { errors }, handleSubmit } = useForm();

  const onValid = async ({ userid, password }) => {
    setValue("password", "");

    const response = await loginUser({ userid, password });

    if (response.status) {
      setRefreshToken(response.json.refresh_token);
      dispatch(SET_TOKEN(response.json.accesstoken));

      return navigate("/");
    } else {
      console.log(response.json);
    }
  };

  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <p style={h1style}>로그인</p>
              <p className="mb-6">새로운 물류경험을 시작하세요</p>
            </div>
            {/* Form */}
            {hasMounted &&
              <Form>
                {/* Username */}
                <Form.Group className="mb-3" controlId="userid">
                  <Form.Label>ID(email)</Form.Label>
                  <Form.Control type="email" name="userid" placeholder="Enter address here" required="" />
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>비밀번호</Form.Label>
                  <Form.Control type="password" name="password" placeholder="**************" required="" />
                </Form.Group>

                {/* Checkbox */}
                <div className="d-lg-flex justify-content-between align-items-center mb-4">
                  <Form.Check type="checkbox" id="rememberme">
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>ID/Password 기억하기</Form.Check.Label>
                  </Form.Check>
                </div>
                <div>
                  {/* Button */}
                  <div className="d-grid">
                    <Button variant="primary" type="submit">Login</Button>
                  </div>
                  <div className="d-md-flex justify-content-between mt-4">
                    <div className="mb-2 mb-md-0">
                      <Link href="/authentication/sign-up" className="fs-5">회원가입 </Link>
                    </div>
                    <div className='mb-2 mb-md-0'>
                      <Link href="/authentication/forget-id" className="text-inherit fs-5">ID 찾기</Link>
                    </div>
                    <div className='mb-2 mb-md-0'>
                      <Link href="/authentication/forget-password" className="text-inherit fs-5">비밀번호 찾기</Link>
                    </div>
                  </div>
                </div>
              </Form>}


          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}


export default SignIn