/**
 * The folder sub-components contains sub component of all the pages,
 * so here you will find folder names which are listed in root pages.
 */

// sub components for /pages/dashboard
import ActiveProjects from 'sub-components/dashboard/ActiveProjects';
import TasksPerformance from 'sub-components/dashboard/TasksPerformance';
import Teams from 'sub-components/dashboard/Teams';
import StockCard from 'sub-components/dashboard/StockCard';

// sub components for /pages/notice
import NoticeTable from 'sub-components/notice/NoticeTable';
import NoticeDetail from 'sub-components/notice/NoticeDetail';

// sub components for /pages/qna
import QnaTable from 'sub-components/qna/QnaTable';
import QnaDetail from 'sub-components/qna/QnaDetail';

// sub components for /pages/equipment-management
import EquipmentTable from './eqipment-management/EquipmentTable';
import EquipmentDetail from './eqipment-management/EquipmentDetail';

// sub components for /pages/profile
import AboutMe from 'sub-components/profile/AboutMe';
import ActivityFeed from 'sub-components/profile/ActivityFeed';
import MyTeam from 'sub-components/profile/MyTeam';
import ProfileHeader from 'sub-components/profile/ProfileHeader';
import ProjectsContributions from 'sub-components/profile/ProjectsContributions';
import RecentFromBlog from 'sub-components/profile/RecentFromBlog';

// sub components for /pages/billing
import CurrentPlan from 'sub-components/billing/CurrentPlan';
import BillingAddress from 'sub-components/billing/BillingAddress';

// sub components for /pages/settings
import DeleteAccount from 'sub-components/settings/DeleteAccount';
import EmailSetting from 'sub-components/settings/EmailSetting';
import GeneralSetting from 'sub-components/settings/GeneralSetting';
import Notifications from 'sub-components/settings/Notifications';
import Preferences from 'sub-components/settings/Preferences';
import BSOffCanvas from './dashboard/BSOffCanvas';
import Modals from 'react-bootstrap';
import { Dropdown, Container, Row, Col } from 'react-bootstrap';
import { Fragment } from 'react';


// sub components for /pages/estimate
import List1 from './estimate/List1';
import List2 from './estimate/List2';

// sub components for /pages/contract
import Current from './contract/current';

// sub components for /pages/current/storingcurrent
import Button from './current/storing/Button';
import Ex from './current/storing/ex';



export {
   ActiveProjects,
   TasksPerformance,
   Teams,   
   StockCard,

   NoticeTable,
   NoticeDetail,

   QnaTable,
   QnaDetail,
   
   EquipmentTable,
   EquipmentDetail,

   AboutMe,
   ActivityFeed,
   MyTeam,
   ProfileHeader,
   ProjectsContributions,
   RecentFromBlog,

   CurrentPlan,
   BillingAddress,

   DeleteAccount, 
   EmailSetting,  
   GeneralSetting, 
   Notifications, 
   Preferences,
   BSOffCanvas,   
   

   List1,
   List2,
   Current,
   Button,
   Ex

};