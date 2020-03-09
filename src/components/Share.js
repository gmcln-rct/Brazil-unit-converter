import React from 'react';

import {
  EmailShareButton,
  FacebookShareButton,
TwitterShareButton,

} from "react-share";

const ShareSelect = () => {
    
    let shareUrl = 'http://copoecolher.com'



    return (
        <section className='share-select'>
 

            <FacebookShareButton url={shareUrl} />

        </section>

    );
};


export default ShareSelect;