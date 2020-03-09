import React from 'react';

import { Facebook, Pinterest, Mail } from "react-social-sharing";

const stylesMail = {
  background: "#888"
};


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
        <Mail
          solid
          small
          style={stylesMail}
          subject="Copo e colher - Brazilian recipe converter!"
          link={shareUrl}
        />

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