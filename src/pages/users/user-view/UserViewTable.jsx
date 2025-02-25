import PageInnerContainer from '@/components/layout/PageInnerContainer';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import Button from '@/components/ui/Button';
import { useState } from 'react';
import ChangePasswordModal from './ChangePasswordModal';

const UserViewTable = ({ data }) => {
  const [isChangePassword, setIsChangePassword] = useState(false);
  // console.log(data?.id);
  const changePassword = () => {
    setIsChangePassword(true);
  };

  return (
    <PageInnerContainer className='p-8'>
      <Table className='border border-separate border-gray-2'>
        <TableBody>
          <TableRow>
            <TableHead>Username</TableHead>
            <TableData>{data?.username}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Email</TableHead>
            <TableData>{data?.email}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Verified</TableHead>
            <TableData>{data?.isVerified ? 'Yes' : 'No'}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Activated</TableHead>
            <TableData>{data?.activated ? 'Yes' : 'No'}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Phone</TableHead>
            <TableData>{data?.phone}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Calling Code</TableHead>
            <TableData>{data?.callingCode}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableData>{data?.userFullName}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>User Type</TableHead>
            <TableData>{data?.userType}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Role</TableHead>
            <TableData>{data?.roleName}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Password</TableHead>
            <TableData>
              <Button variant='secondary' size='small' onClick={changePassword}>
                Change Password
              </Button>
            </TableData>
          </TableRow>

          {/* 
        <TableRow>
          <TableHead>Is Featured</TableHead>
          <TableData>{product?.isFeatured ? 'Yes' : 'No'}</TableData>
        </TableRow> */}
        </TableBody>
      </Table>
      {isChangePassword && (
        <ChangePasswordModal
          isOpen={isChangePassword}
          setIsOpen={setIsChangePassword}
          data={data}
        />
      )}
    </PageInnerContainer>
  );
};

export default UserViewTable;
