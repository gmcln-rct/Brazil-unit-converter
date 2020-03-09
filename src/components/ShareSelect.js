import React from 'react';

import { Facebook, Pinterest } from "react-social-sharing";

const stylesFacebook = {
  background: "#543243"
};

const stylesPinterest = {
  background: "#A17088"
};

const ShareSelect = () => {
    
    let shareUrl = 'https://www.copoecolher.com'

    return (
      <section className="share-select">
        <Facebook solid small style={stylesFacebook} link={shareUrl} />
        <Pinterest
          solid
          small
          style={stylesPinterest}
          message="I use Copo e colher - Brazilian recipe converter!"
          link={shareUrl}
        />
      </section>
    );
};


export default ShareSelect;