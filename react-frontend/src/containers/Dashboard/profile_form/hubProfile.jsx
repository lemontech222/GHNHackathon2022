import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../../components/Button';
import { SubText, Title } from '../../../components/Comon';
import { Input, TextArea } from '../../../components/Input';
import { Marginer } from '../../../components/Marginer';
import { AdjustHeight } from '../MiddleSection/createPost';
import Axios from 'axios';
import Cookies from 'js-cookie';

const HubProfileContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export function HubProfile(props) {
  const { hubProfile } = props;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [gps, setGps] = useState('');
  const [reg, setReg] = useState('');
  const [error, setError] = useState();

  const SaveProfile = async (e) => {
    e.preventDefault();
    const token = Cookies.get('jwt_access');

    Axios({
      method: 'patch',
      url: `api/users/hubs/${hubProfile.id}/`,
      data: {
        hub_name: name,
        description: description,
        contact: contact,
        physical_address: address,
        gps_address: gps,
        business_registration_number: reg,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(
      (response) => {
        // console.log(response);
        window.location.href = '/home';
      },
      (err) => {
        console.log('Error: ', err);
        setError(err.response.data);
      }
    );
  };

  return (
    <HubProfileContainer>
      <Title>Hub Profile</Title>
      <SubText>Complete your hub's profile</SubText>
      <Input placeholder="Hub Name" onChange={(e) => setName(e.target.value)} />
      <TextArea
        placeholder="Description"
        onChange={(e) => (AdjustHeight, setDescription(e.target.value))}
      />
      <Input
        placeholder="Contact"
        onChange={(e) => setContact(e.target.value)}
      />
      <Input
        placeholder="Address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <Input
        placeholder="GPS Address"
        onChange={(e) => setGps(e.target.value)}
      />
      <Input
        placeholder="Business Registration"
        onChange={(e) => setReg(e.target.value)}
      />
      <Marginer direction="vertical" margin={10} />
      <Button
        width="100%"
        height={50}
        size={20}
        font-weight={400}
        bradius={10}
        click={SaveProfile}
      >
        Save
      </Button>
    </HubProfileContainer>
  );
}
