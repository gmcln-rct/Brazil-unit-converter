import React from 'react';

import { Facebook, Pinterest, Mail, Whatsapp } from "react-social-sharing";

const stylesMail = {
  background: "#888"
};


const stylesFacebook = {
  background: "#543243"
};

const stylesPinterest = {
  background: "#A17088"
};

const stylesWhatsapp = {
  background: "#6B3B6B"
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