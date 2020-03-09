import React from 'react';

import {
  EmailShareButton
  FacebookShareButton,
TwitterShareButton,

} from "react-share";

const ShareSelect = () => {
    




    return (
        <section className='share-select'>
 

            <FacebookShareCount url={shareUrl} />

        </section>

    );
};


export default ShareSelect;