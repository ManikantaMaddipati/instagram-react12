import React from "react";
import {Helmet} from "react-helmet/es/Helmet";

function SEO({title}) {
    const titleText = title ? `${title}. instagram` : "instagram"
  return <Helmet>
              <title>{titleText}</title>
        </Helmet>
}

export default SEO;
