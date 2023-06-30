import React from 'react'

// import { useState } from 'react';
// import { useTranslation } from 'react-i18next'
// import axios from 'axios';
// import { useEffect } from "react";
// feed
// import Feed from "../Component/Feedpost/Feed";

// import TranslateBackend from '../Smallcomponent/TranslateLanguage/TranslateBackend'
import TEXTTOSPEECH from '../Container/HomeIconsButton/TEXTTOSPEECH';

import "../Component/MapRightside.css"
import { Link } from "react-router-dom";
import Hirepeople from "../asset/maptopbtn/mapbottombtns/hirepeopls.svg"
import Imagejob from "../asset/maptopbtn/mapbottombtns/job.svg"
import Filter from "../asset/maptopbtn/mapbottombtns/filter.svg"
import Postjob from "../asset/maptopbtn/mapbottombtns/postjob.svg"
import More from "../asset/maprightside-icon/more.svg"
import WhatsApp from "../asset/maprightside-icon/whtsup.svg"
import SendMail from "../asset/maprightside-icon/sendmail.svg"
import Meeting from "../asset/maprightside-icon/meeting.svg"
import Videocall from "../asset/maprightside-icon/vidio.svg"
import Audiocall from "../asset/maprightside-icon/audio.svg"
import Chat from "../asset/maprightside-icon/chat.svg"
import Language from "../asset/maprightside-icon/launguage.svg"
import person from "../asset/maprigtht side image/Mapsicle Mapvijay.svg"
import India from "../asset/maprigtht side image/india.svg"
import location from "../asset/maprigtht side image/locationlogo.svg"
import user from "../asset/maprigtht side image/tieuser.svg"
import verified from "../asset/maprigtht side image/verified.svg"
import sky from "../asset/maprigtht side image/skyline.png"
import unlike from "../asset/maprigtht side image/unlikecomment.svg"
import like from "../asset/maprigtht side image/likepicture.svg"
import comment from "../asset/maprigtht side image/comment.svg"
import report from "../asset/maprigtht side image/reports.svg"
import share from "../asset/maprigtht side image/shareimg.svg"
import translate from "../asset/maprigtht side image/transulate.svg"
import Mapdestination from "../asset/mapDestinationImages/mapdestination.svg"
import MaptopblueBG from "../asset/mapdesBlueBG/maptopblueBG.svg"
import MaptopEngeeneerimg from "../asset/mapdesBlueBG/mapTopEnggeneeriimg.png"
import Mapdesblue from "../asset/mapDestinationImages/mapdesblue.svg"
import Share from "../asset/maprightside-icon/share.svg"
import abrod from "../asset/maprightside-icon/abrod.svg"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faSmile, faBookmark } from '@fortawesome/free-solid-svg-icons';
import Translate from '../Smallcomponent/TranslateLanguage/Translate';
import AudioPlayer from '../Container/HomeIconsButton/AudioPlayer';
library.add(faSmile, faBookmark, faBell);






function MapRightside() {

      // Translation

      // const languages = [
      //       { value: '', text: "Options" },
      //       { value: 'en', text: "English" },
      //       { value: 'hi', text: "Hindi" },
      //       { value: 'ml', text: "Malayalam" },
      //       { value: 'fr', text: "French" },
      //       { value: 'gu', text: "Gujarati" },
      //       { value: 'bn', text: "Bengali" },
      //       { value: 'ta', text: "Tamil" },
      //       { value: 'te', text: "Telugu" },
      //       { value: 'it', text: "Italian" }
      // ];




      // const { t } = useTranslation();
      // const [lang, setLang] = useState('en');

      // const handleChange = e => {
      //       setLang(e.target.value);
      //       let loc = "http://localhost:3000/";
      //       window.location.replace(loc + "?lng=" + e.target.value);
      // };



      //   jagan


      // const googleTranslateElementInit = () => {
      //       new window.google.translate.TranslateElement(
      //         {
      //           pageLanguage: "en",
      //           autoDisplay: false
      //         },
      //         "google_translate_element"
      //       );
      //     };
      //     useEffect(() => {
      //       var addScript = document.createElement("script");
      //       addScript.setAttribute(
      //         "src",
      //         "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      //       );
      //       document.body.appendChild(addScript);
      //       window.googleTranslateElementInit = googleTranslateElementInit;
      //     }, []);



      // const options = {
      //       method: 'GET',
      //       url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
      //       headers: {
      //         'Accept-Encoding': 'application/gzip',
      //         'X-RapidAPI-Key': 'b43fb1616dmshb84b76f61d5c475p1f0bbejsn3964584c3c14',
      //         'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      //       }
      //     };

      //     try {
      //          axios.request(options).then((transulate)=>{ 
      //             console.log(transulate.data); 
      //           })


      //     } catch (error) {
      //           console.error(error);
      //     }



      //    Audio translate textospeek


      // const text = "Hey guys welcome to geetham software pvt ltd .";
      const text = "Core java, Advance java, Python, Angular, React js, Node Js,Manual Testing, Backend developer,Data base admin, ruby on rails, AIML, Big Data, Algorithm, Wire frame, Cloud computing, DevOpsSales force CRM, Scrum, IoT, Embedded, Robotics, Micro servic Core java, Advance java, PythonAngular, React js, Node Js, Manual Testing, Backend developer, Data base admin, ruby rails, AIMLBig Data, Algorithm, Wire frame, Cloud computing, DevOps, Sales force CRM, Scrum, Embedded, Robotics, Micro service..";






      return (
            <div className='map-component-all'>
                  <div>

                        <div className="container text-center">
                              <div className="row">

                                    <div className="col-lg-6">
                                          <div className='homemap'>
                                                <div className="map-center-vertical"></div>
                                                <div className='map-bottom-icon'>

                                                      {/*map-botton button*/}

                                                      <Link to={"./fjob"} className='LINK-map-desc-down-btn'>  <li className='list-inline-item'>
                                                            <button to="" className='maptopdown-btn'> <span className='n2-right-btn-name'><img src={Hirepeople} alt="image" style={{
                                                                  height: '10px',
                                                                  width: '10px',
                                                                  fontFamily: 'Alumni Sans',


                                                            }} /> Hire people</span></button>
                                                      </li></Link>
                                                      <Link to={"./fjob"}>  <li className='list-inline-item'>
                                                            <button to="" className='maptopdown-btn'> <span className='n2-right-btn-name'><img src={Imagejob} alt="image" style={{
                                                                  height: '10px',
                                                                  width: '10px',
                                                                  fontFamily: 'Alumni Sans'
                                                            }} /> Jobs</span></button>
                                                      </li></Link>
                                                      <Link to={"./fjob"}>  <li className='list-inline-item'>
                                                            <button to="" className='maptopdown-btn'> <span className='n2-right-btn-name'><img src={Filter} alt="image" style={{
                                                                  height: '10px',
                                                                  width: '10px',
                                                                  fontFamily: 'Alumni Sans'
                                                            }} /> Filter</span></button>
                                                      </li></Link>
                                                      <Link to={"./fjob"}>  <li className='list-inline-item'>
                                                            <button to="" className='maptopdown-btn'> <span className='n2-right-btn-name'><img src={Postjob} alt="image" style={{
                                                                  height: '10px',
                                                                  width: '10px',
                                                                  fontFamily: 'Alumni Sans'
                                                            }} /> Post job</span></button>
                                                      </li></Link>




                                                </div>

                                                {/* rightside-icone */}

                                                <div className='map-side-icon'>

                                                      <Link to={"./fjob"}>  <ol style={{ paddingLeft: '50px' }}>
                                                            <img src={More} alt="home" style={{
                                                                  height: '55x',
                                                                  width: '55x'
                                                            }} />
                                                            <h6 style={{ fontFamily: 'Alumni Sans', color: 'black' }} >More</h6>

                                                      </ol> </Link>
                                                      <Link to={"./fjob"}>  <ol style={{ paddingLeft: '50px' }}>
                                                            <img src={Share} alt="home" style={{
                                                                  height: '32px',
                                                                  width: '32x'
                                                            }} />
                                                            <h6 style={{ fontFamily: 'Alumni Sans', color: 'black' }} >Share</h6>

                                                      </ol> </Link>
                                                      <Link to={"./fjob"}>   <ol style={{ paddingLeft: '50px' }}>
                                                            <img src={WhatsApp} alt="home" style={{
                                                                  height: '35px',
                                                                  width: '35x'
                                                            }} />
                                                            <h6 style={{ fontFamily: 'Alumni Sans', color: 'black' }} >Whats App</h6>

                                                      </ol> </Link>
                                                      <Link to={"./fjob"}> <ol style={{ paddingLeft: '50px' }}>
                                                            <img src={SendMail} alt="home" style={{
                                                                  height: '30px',
                                                                  width: '30px'
                                                            }} />
                                                            <h6 style={{ fontFamily: 'Alumni Sans', color: 'black' }} >Send Mail</h6>

                                                      </ol> </Link>
                                                      <Link to={"./fjob"}><ol style={{ paddingLeft: '50px' }}>
                                                            <img src={Meeting} alt="home" style={{
                                                                  height: '28px',
                                                                  width: '28x'
                                                            }} /><span style={{ margin: "-12px 0px 0px -10.5px" }} class="badgefive">573</span>
                                                            <h6 style={{ fontFamily: 'Alumni Sans', color: 'black' }} >Meeting</h6>

                                                      </ol> </Link>
                                                      <Link to={"./fjob"}><ol style={{ paddingLeft: '50px' }}>
                                                            <img src={Videocall} alt="home" style={{
                                                                  height: '23px',
                                                                  width: '23x'
                                                            }} /><span style={{ margin: "-12px 0px 0px -10.5px" }} class="badgefive">333</span>
                                                            <h6 style={{ fontFamily: 'Alumni Sans', color: 'black' }} >Video call</h6>

                                                      </ol> </Link>
                                                      <Link to={"./fjob"}><ol style={{ paddingLeft: '50px' }}>
                                                            <img src={Audiocall} alt="home" style={{
                                                                  height: '29px',
                                                                  width: '29x'
                                                            }} /><span style={{ margin: "-12px 0px 0px -10.5px" }} class="badgefive">111</span>
                                                            <h6 style={{ fontFamily: 'Alumni Sans', color: 'black' }} >Audio call</h6>

                                                      </ol> </Link>
                                                      <Link to={"./fjob"}><ol style={{ paddingLeft: '50px' }}>
                                                            <img src={Chat} alt="home" style={{
                                                                  height: '29px',
                                                                  width: '29x'
                                                            }} /><span style={{ margin: "-12px 0px 0px -10.5px" }} className="badgefive">157</span>
                                                            <h6 style={{ fontFamily: 'Alumni Sans', color: 'black' }} >Chat</h6>

                                                      </ol> </Link>
                                                      <Link to={"./fjob"}><ol style={{ paddingLeft: '50px' }}>
                                                            <img src={Language} alt="home" style={{
                                                                  height: '27px',
                                                                  width: '27x'
                                                            }} />
                                                            <h6 style={{ fontFamily: 'Alumni Sans', color: 'black' }} >Language</h6>

                                                      </ol> </Link>
                                                      <Link to={"./fjob"}>  <ol style={{ paddingLeft: '50px' }}>
                                                            <img src={abrod} alt="home" style={{
                                                                  height: '27px',
                                                                  width: '27x'
                                                            }} /><span style={{ margin: "-12px 0px 0px -10.5px" }} class="badgefive">777</span>
                                                            <h6 style={{ fontFamily: 'Alumni Sans', color: 'black' }} >Abroad</h6>

                                                      </ol> </Link>



                                                </div>

                                                {/* mapdestination */}

                                                {/* <div className='mapdestination-all'>
                                                       <ul>

                                                       <ol className='mapdest-2'>
                                                                  <img src={Mapdesblue} alt="mapdes-blue" style={{
                                                                        //  height: '77px',
                                                                        //  width: '77x'
                                                                        width: "159px",
                                                                        height: "69.02px"
                                                                  }} />
                                                            </ol> 
                                                              <ol className='mapdest-1'>
                                                                  <img src={Mapdestination} alt="mapdes-green" style={{
                                                                        width: "159px",
                                                                        height: "69.02px"
                                                                  }} />
                                                             </ol> 
                                                             
                                                              <ol className='mapdest-3'>
                                                                  <img src={Mapdesblue} alt="mapdes-blue" style={{
                                                                        width: "159px",
                                                                        height: "69.02px"
                                                                  }} />
                                                            </ol> 
                                                            <ol className='mapdest-4'>
                                                                  <img src={Mapdesblue} alt="mapdes-blue" style={{
                                                                        width: "159px",
                                                                        height: "69.02px"
                                                                  }} />
                                                            </ol> 
                                                             <ol className='mapdest-5'>
                                                                  <img src={Mapdesblue} alt="mapdes-blue" style={{
                                                                        width: "159px",
                                                                        height: "69.02px"
                                                                  }} />
                                                            </ol> 
                                                          <ol className='mapdest-6'>
                                                                  <img src={Mapdesblue} alt="mapdes-blue" style={{
                                                                        width: "159px",
                                                                        height: "69.02px"
                                                                  }} />
                                                            </ol> 
                                                            <ol className='mapdest-7'>
                                                                  <img src={Mapdesblue} alt="mapdes-blue" style={{
                                                                        width: "159px",
                                                                        height: "69.02px"
                                                                  }} />
                                                                   </ol> 
                                                             
                                                                    <ol className='mapdest-8'>
                                                                  <img src={Mapdesblue} alt="mapdes-blue" style={{
                                                                        width: "159px",
                                                                        height: "69.02px"
                                                                  }} />
                                                                  </ol> 
                                                           
                                                              <ol className='mapdest-9'>
                                                                  <img src={Mapdesblue} alt="mapdes-blue" style={{
                                                                        width: "159px",
                                                                        height: "69.02px"
                                                                  }} />
                                                                        </ol> 
                                                         


                                                      </ul> 
                                                </div> */}



                                                {/* <div className='mapdestination-all'>
                                                     <div className='map-desnination-backround'>

                                                     </div>
                                                </div> */}





                                                <div className='map-dsnination-backround'>

                                                      <img className='map-dsnination-backround' src={MaptopblueBG} alt="mapdes-blue" style={{
                                                            width: "159px",
                                                            height: "69.02px"
                                                      }} />
                                                      <img className='' src={MaptopblueBG} alt="mapdes-blue" style={{
                                                            width: "159px",
                                                            height: "69.02px"
                                                      }} />

                                                </div>



                                          </div>
                                    </div>




                                    {/* maprightSideContent */}

                                    <div class="col">

                                               <div class="col">
                                                <div class="container">
                                                      <div class="row row-cols-auto">
                                                            <div className="col" style={{ fontFamily: 'Alumni Sans' }}>Post announcements</div>
                                                            <div className="col" style={{ fontFamily: 'Alumni Sans' }}>Post your jobs</div>
                                                            <div className="col" style={{ fontFamily: 'Alumni Sans' }}>Post business opportunities</div>
                                                            <div className="col" style={{ fontFamily: 'Alumni Sans' }}>post ad & offers</div>
                                                      </div>
                                                </div>
                                                <hr></hr>
                                                <div className="container">
                                                      <div className='row'>


                                                            {/* <div className='Mright-top-profile-head-logo'> */}


                                                            <div className="col-md-1">
                                                                  <img src={person} alt="person" className='md-logo'
                                                                  />
                                                            </div>
                                                            <div className="col-md-8">
                                                                  <div className='side-name'>
                                                                        <h style={{ fontFamily: 'Alumni Sans' }}>Vijayaraj Chinnarajan</h>
                                                                        <FontAwesomeIcon icon={faSmile} style={{ color: 'green' }} />
                                                                        <h style={{ color: 'green', fontFamily: 'Alumni Sans' }}>4.7/5 10023 Reviews</h>
                                                                        <FontAwesomeIcon icon={faBell} />
                                                                        <FontAwesomeIcon icon={faBookmark} />
                                                                  </div>
                                                                  <div className='right-2ndcontent'>
                                                                        <p>
                                                                              I am free now call me will discus business,investments,jobs
                                                                        </p>
                                                                  </div>
                                                                  <div>
                                                                        <span>
                                                                              <li className='list-inline-item'>
                                                                                    <span>
                                                                                          <img src={India} alt='' /><span style={{ fontFamily: 'Alumni Sans', fontWeight: '400', letterSpacing: '0.1em' }}>chennai,india</span>
                                                                                    </span>
                                                                              </li>
                                                                              <li className='list-inline-item'>
                                                                                    <span>
                                                                                          <img src={location} alt='' /><span style={{ fontFamily: 'Alumni Sans', fontWeight: '400', letterSpacing: '0.1em' }}>13 km</span>
                                                                                    </span>
                                                                              </li>
                                                                              <li className='list-inline-item'>
                                                                                    <span>
                                                                                          <img src={user} alt='' /><span style={{ fontFamily: 'Alumni Sans', fontWeight: '400', letterSpacing: '0.1em' }}>177</span>
                                                                                    </span>
                                                                              </li>
                                                                              <li className='list-inline-item'>
                                                                                    <span>
                                                                                          <img src={verified} alt='' /><span style={{ fontFamily: 'Alumni Sans', fontWeight: '600', letterSpacing: '0.1em', color: 'green' }}>verified</span>
                                                                                    </span>
                                                                              </li>
                                                                        </span>

                                                                  </div>




                                                            </div>
                                                      </div>

                                                      <hr></hr>


                                                      <h5 className='right-headof-annoucement' style={{ fontFamily: 'Alumni Sans' }}>
                                                            Heading Of Announcements or news or informations
                                                      </h5>


                                                      {/* post video */}

                                                      {/* <div className='right-3rdcontent'>


                                                            <div class="ratio ratio-16x9">
                                                        <iframe src="https://www.youtube.com/embed/Demhi2QPTPM" title="YouTube video" allowfullscreen></iframe></div>



                                                      </div> */}


                                                      <hr></hr>
                                                      <div className='right-sixth-content' >
                                                            <li className='list-inline-item'>
                                                                  <span>
                                                                        <img src={like} alt='' /><span style={{ fontFamily: 'Alumni Sans', }}>107</span>
                                                                  </span>
                                                            </li>
                                                            <li className='list-inline-item'>
                                                                  <span>
                                                                        <img src={unlike} alt='' /><span style={{ fontFamily: 'Alumni Sans' }}>17</span>
                                                                  </span>
                                                            </li>
                                                            <li className='list-inline-item'>
                                                                  <span>
                                                                        <img src={comment} alt='' /><span style={{ fontFamily: 'Alumni Sans', }}>257 comments</span>
                                                                  </span>
                                                            </li>
                                                            <li className='list-inline-item'>
                                                                  <span>
                                                                        <img src={report} style={{ fontFamily: 'Alumni Sans' }} alt='' /><span style={{ fontFamily: 'Alumni Sans' }}>Report & stop</span>
                                                                  </span>
                                                            </li>
                                                            <li className='list-inline-item'>
                                                                  <span>
                                                                        <img src={share} style={{ fontFamily: 'Alumni Sans' }} alt='' /><span style={{ fontFamily: 'Alumni Sans' }}>27 shares</span>
                                                                  </span>
                                                            </li>
                                                      </div>
                                                      <hr></hr>
                                                      <h5 className='right-sevent-content' style={{ fontFamily: 'Alumni Sans', fontWeight: '600' }}>
                                                            Heading Of Announcements or news or informations
                                                      </h5>
                                                      <p className='para4content' style={{ fontFamily: 'Alumni Sans', textAlign: 'start' }}>


                                                            <div className="transulate-all">





                                                                  {/* <h1 className='transulate-para-content' style={{ fontFamily: 'Alumni Sans', paddingTop: '50px', fontWeight: 'bold' }}>{t('Transulate')}</h1> */}
                                                                  <div style={{ fontFamily: 'Alumni Sans', color: "#4285F4", paddingTop: '70px', paddingRight: "10px" }} className="rightside-listening-icon">
                                                                        Listening...
                                                                  </div>

                                                                  <div className='transulate-option-btn'>
                                                                        <img className='translate-icon' src={translate} alt='' value={Language} />
                                                                        <span className='transalte-name-bold' style={{ fontFamily: 'Alumni Sans', }}>translate</span>
                                                                        {/* <div>
                                                                              <select className='transulate-option' value={lang} onChange={handleChange}>
                                                                                    {languages.map(item => {
                                                                                          return (<option key={item.value}
                                                                                                value={item.value}>{item.text}</option>);
                                                                                    })}

                                                                              </select>
                                                                        </div> */}

                                                                  </div>


                                                                  {/* <AudioPlayer/> */}

                                                                  <div>


                                                                        <TEXTTOSPEECH text={text} />
                                                                        <p>{text}</p>


                                                                  </div>













                                                                  {/* <div>
                                                                
                                                        <div id="google_translate_element"></div>
                                                       <h4>Start building your app. Happy Coding!</h4>    
                                                             
                                                       </div> */}





                                                                  {/* Feed post */}
                                                                  {/* <Feed/> */}










                                                            </div>


                                                      </p>

                                                      <div>



                                                            <div>


                                                            </div>

                                                      </div>


                                                </div>

                                          </div>
                                    </div>


                              </div>
                        </div>
                  </div>









            </div>


      )
}
export default MapRightside
