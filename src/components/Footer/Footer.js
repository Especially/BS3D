import React from 'react';
import  IG  from '../../assets/Icon-instagram.svg';
import  FB  from '../../assets/Icon-facebook.svg';
import  TT  from '../../assets/Icon-twitter.svg';

function Footer() {

    return (
        <footer class="foot">


            <div class="foot__content">
            <div class="foot__head">
            <h1 class="foot__title">Partner With Us!</h1>
<div class="foot__socials">
    <img class="socials__icon" title="Connect to us via Instagram" src={IG} alt="Instagram" />
    <img class="socials__icon" title="Connect to us via Facebook" src={FB} alt="Facebook" />
    <img class="socials__icon" title="Connect to us via Twitter" src={TT} alt="Twitter" />
</div>
<div class="foot__copy">
                <p class="comment">Grub Is Blind <sup>&copy;</sup> 2020</p>
            </div>
</div>
                <div class="foot__text">
                    <h3 class="sub foot__text-title">Address</h3>
                    <p class="comment contact-info">
                        <span class="text__spacing">460 King Street West</span>
                        <span class="text__spacing">Toronto, Ontario M5V 1L7</span>
                    </p>
                    <p class="comment contact-info"><a class="contact-info__email" href="mailto:info@thebeesknees.com">contact@grubisblind.ca</a></p>
                </div>

                <div class="foot__text">
                    <h3 class="sub foot__text-title">Links</h3>
                    <p class="comment contact-info">
                        <span class="text__spacing">Link 1</span>
                        <span class="text__spacing">Link 2</span>
                        <span class="text__spacing">Link 3</span>
                    </p>
                </div>

                <div class="foot__text">
                    <h3 class="sub foot__text-title">Our Partners</h3>
                    <p class="comment contact-info">
                        <span class="text__spacing">BrainStation</span>
                        <span class="text__spacing">EY</span>
                    </p>
                </div>
            </div>

    </footer>
    );
}

export default Footer;