'use client'
// import node module libraries
import { Col, Row, Container, Table } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import {
  NoticeTable,
  NoticeDetail
} from 'sub-components'

const Profile = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="공지사항"/>

      {/* content */}
      <div className="py-6">
        <Row>
          
          {/* noticeTable */}
          <NoticeTable />

        </Row>
      </div>

    </Container>
  )
}

export default Profile