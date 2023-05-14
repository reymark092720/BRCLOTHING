import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function Contact() {
  return (
    <>
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
      
      </Tab>
      <Tab eventKey="profile" title="Profile">
    
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
    </>
  );
}

export default Contact;