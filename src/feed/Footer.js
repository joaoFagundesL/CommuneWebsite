import React from "react";

import bitbucket from '../Assets/Bitbucket Icon.svg';
import atlassian from '../Assets/Atlassian Icon.svg';
import behance from '../Assets/Behance Icon.svg';
import bing from '../Assets/Bing Icon.svg';
import dropbox from '../Assets/Dropbox Icon.svg';
import twitch from '../Assets/Twitch Icon.svg';
import twitter from '../Assets/Twitter Icon.svg';

function Form() {
  return(
    <div className="grid gap-2 mt-4">
      <p className="font-medium text-paragraphColor">Used by these companies</p>

      <ul className="flex flex-wrap gap-3 mt-4 mb-4">
        <li>
          <img src={bitbucket} alt="" />
        </li>

        <li>
          <img src={atlassian} alt="" />
        </li>

        <li>
          <img src={behance} alt="" />
        </li>

        <li>
          <img src={bing} alt="" />
        </li>

        <li>
          <img src={twitch} alt="" />
        </li>

        <li>
          <img src={twitter} alt="" />
        </li>

        <li>
          <img src={dropbox} alt="" />
        </li>
      </ul>
    </div>
  )
}

export default Form