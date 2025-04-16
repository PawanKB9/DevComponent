import { Body ,Button ,Container ,Head,Hr,Html,Preview,Section,Text} from '@react-email/components';

export const PasswordEmail = ({ userFirstname }) => (
  <Html>
    <Head />
    <Body style={{ backgroundColor: '#ffffff' }}>
      <Preview>The sales intelligence platform that helps you uncover qualified leads.</Preview>

      <Container style={{ margin: '0 auto', padding: '20px 0 48px' }}>
        <Text style={{ fontSize: '16px', lineHeight: '26px' }}>Hi {userFirstname},</Text>

        <Text style={{ fontSize: '16px', lineHeight: '26px' }}>
          Welcome to Koala, the sales intelligence platform that helps you uncover qualified leads and close deals faster.
        </Text>

        <Section style={{ textAlign: 'center' }}>
          <Button
            href="https://localhost:5000"
            style={{
              backgroundColor: '#5F51E8',
              borderRadius: '3px',
              color: '#fff',
              fontSize: '16px',
              textDecoration: 'none',
              textAlign: 'center',
              display: 'block',
              padding: '12px',
            }}
          >
            I am In
          </Button>
        </Section>

        <Text style={{ fontSize: '16px', lineHeight: '26px' }}>
          Best,
          <br />
          The Koala team
        </Text>

        <Hr style={{ borderColor: '#cccccc', margin: '20px 0' }} />

        <Text style={{ color: '#8898aa', fontSize: '12px' }}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text>
      </Container>
    </Body>
  </Html>
);

// Preview props (optional for dev preview in some tools like react-email preview)
PasswordEmail.PreviewProps = {
  userFullName: 'Pawan Kumar Bind',
};

export default PasswordEmail;
