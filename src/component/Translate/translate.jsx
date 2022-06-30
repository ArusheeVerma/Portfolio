// export default function Translate(){
//     return(
//         <div className="container">
//         <p>Translate this page in your preferred language:</p> 
      
//         <div id="google_translate_element"></div> 
//         <p>You can translate the content of this page by selecting a language in the select box.</p> 
//     </div>
//     )
// }

import React from "react";
import {Helmet} from "react-helmet";

class Translate extends React.Component {
    render () {
      return (
          <div className="application">
              <Helmet>
              
              <p> Translate this page in your preferred language:</p> 
                <div id="google_translate_element"></div> 

                <script type="text/javascript" src={`https://translate.google.com/translate_a/element.js?
    cb=googleTranslateElementInit`}>
            </script>

                <script type="text/javascript"> 
                {`function googleTranslateElementInit() { 
                        new google.translate.TranslateElement(
                            {pageLanguage: 'en'}, 
                            'google_translate_element'
                        )}   `}
                </script>  

                
            <p>You can translate the content of this page by selecting a language in the select box.</p> 
              </Helmet>
          </div>
      );
    }
};

export default Translate;