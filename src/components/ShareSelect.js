import React from 'react';

import { Facebook, Pinterest, Mail, Whatsapp } from "react-social-sharing";

const stylesMail = {
  background: "#888"
};


const stylesFacebook = {
  background: "#888"
};

const stylesPinterest = {
  background: "#888"
};

const stylesWhatsapp = {
  background: "#888"
}

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

        <Whatsapp 
          solid 
          small 
          style={stylesWhatsapp}
          message="Share Copo e colher on Whatsapp" 
          link={shareUrl}
        />
      </section>
    );
};


export default ShareSelect;