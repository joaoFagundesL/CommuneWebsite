import React from "react";

import bitbucket from '../Assets/Bitbucket Icon.svg';
import atlassian from '../Assets/Atlassian Icon.svg';
import behance   from '../Assets/Behance Icon.svg';
import bing      from '../Assets/Bing Icon.svg';
import dropbox   from '../Assets/Dropbox Icon.svg';
import twitch    from '../Assets/Twitch Icon.svg';
import twitter   from '../Assets/Twitter Icon.svg';

const icons = [
  { src: bitbucket, alt: 'Bitbucket logo' },
  { src: atlassian, alt: 'Atlassian logo' },
  { src: behance,   alt:   'Behance logo' },
  { src: bing,      alt:      'Bing logo' },
  { src: dropbox,   alt:   'Dropbox logo' },
  { src: twitch,    alt:    'Twitch logo' },
  { src: twitter,   alt:   'Twitter logo' },
];

function Footer() {
  return(
    <div className="grid gap-2 mt-4">
      <p className="font-medium text-paragraphColor">Used by these companies</p>
      <ul className="flex flex-wrap gap-3 mt-4 mb-4">
        {icons.map(({src, alt}) => (
          <li key={src}>
            <img src={src} alt={alt} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer;