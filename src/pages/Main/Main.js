import React from 'react';
import apple from '../../assets/app-store.png';
import play from '../../assets/google-play.png';
import mission from '../../assets/mission.png';
import table from '../../assets/table.png';
import cheers from '../../assets/cheers.png';

class Main extends React.Component {

render() {
    return (
        <>
        <div class="hero">
            <h1 class="title-text hero__header">Grub is Blind</h1>
            <input type="button" class="hero__btn" value="Try it Out!" title="Try it Out!" />
        </div>
        <main>
            <section className="impact">
                <p>COVID-19 has impacted humanity in ways never imagined. Trusted food establishments have suffered and we’ve lost social interactions with neighbours.</p>

                <p>Wanna support your favourite local food janut while reconnecting with humanity?</p>

                <p>Grub is Blind is bringing community back. Pick your favourite neighbourhood restaurant and be paired with a like-minded individual for some good conversation and food. Support your local restaurants and rekindle with friends and neighbours. It is time to eat. </p>
                <div className="mission">
                    <div className="section__block mission-statement">
                        <h2>Mission Statement</h2>
                        <p className="mission-paragraph">to bring back <strong>community</strong> through the <strong>love of food</strong></p>
                    </div>
                    <div className="section__block">
                        <img className="section__image" src={mission} alt="Mission Statement" />
                    </div>
                </div>
            </section>
            <section className="about">
            <h2>What we do</h2>
            <div className="section__holder">
            <div className="section__block section-alt">
                        <img className="section__image" src={table} alt="Mission Statement" />
                    </div>
                <div className="section__block">
                    <p>Restaurants have been hit hard. They have lost patrons. But we all still need to eat. And many 
of us, like you and I, LOVE to eat!</p>
                    <p>
                    Grub is Blind brings people onto a platform allowing them to connect with friends and neighbours over a good meal at a local mom 
                    and pop restaurant bringing together 
                    community to support one another.</p>
                </div>
            </div>
            <div className="section__holder">
                <div className="section__block">
                    <p>Start by selecting restaurants you would like to revisit or try. We curtail restaurant seletions for 
you based on your preferences and location. </p>

<p>We then match you with like-minded foodies in 
the area. We provide a platform through which 
you connect and help you set-up a time and date to meet and eat, enjoying local cuisine while supporting your community. Simple as that!</p>
                </div>
                <div className="section__block section-alt">
                        <img className="section__image" src={cheers} alt="Cheers!" />
                    </div>
            </div>
            </section>
            <section class="landing">
                <div class="landing__title">
                    <h2>Hungry? Download Now!</h2>
                </div>
                <div class="card-container">
                        <div class="card card__feature-1">
                            <h2 class="card__feature-title">Image 1</h2>
                        </div>
                        <div class="card card__feature-2">
                            <h2 class="card__feature-title">Image 2</h2>
                        </div>
                </div>
                <div class="card-download-container">
                    <img className="card-icon" src={apple} alt="App Store" />
                    <img className="card-icon" src={play} alt="Google Play Store" />
                </div>
            </section>
        </main>
    </>
    );
}
}

export default Main;