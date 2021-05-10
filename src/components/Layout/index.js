import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container">
        {props.children}
        <Sidebar />
    </div>
    <div>
        <h1>Privacy Policies</h1>
        <p>The data protection regime in India is in a state of flux. The year of 2017 has been a humdinger of a year for data privacy laws. On August 24, 2017 the constitutional bench of Supreme Court1 decided that the right to privacy was, after all, a fundamental right.2 The Supreme Court also noted in the matter that "the government has initiated the process of reviewing the entire area of data protection, it would be appropriate to leave the matter for expert determination so that a robust regime for the protection of data is put into place. We expect that the Union government shall follow up on its decision by taking all necessary and proper steps." Following the judgment in re Puttuswamy, the Committee of Experts on a Data Protection Framework for India chaired by Justice B. N. Srikrishna released a white paper on November 27, 2017.3 The Ministry of Electronics & Information Technology (MeitY) issued a press release on December 28, 2017 seeking public comments on the whitepaper by the end of January 31, 2018.

While the country is waiting for the government to issue new laws on data protection and privacy, the popular question right now seems to be what should be included in a privacy policy today.</p>
    </div>
      </React.Fragment>
    
   )

 }

export default Layout