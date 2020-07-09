// import external modules
import React from 'react'

// define functional component 
function UnderConstruction (props) {
  return (
    <div className='container'>
      <h1>You have reached the {props.name} Component</h1>
      <h1>Sorry I am currently under construction</h1>
      <p style="font-size: 0.9rem;font-style: italic;">
        <img style="display: block;" src="https://live.staticflickr.com/2390/2091112387_2e42fd10ca_b.jpg" alt="Reddick Construction"/>
        <a href="https://www.flickr.com/photos/21597369@N06/2091112387">"Reddick Construction"</a>
        <span> by <a href="https://www.flickr.com/photos/21597369@N06">OPAL Community Land Trust</a></span>
         is licensed under 
          <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html" style="margin-right: 5px;">CC BY-NC-SA 2.0</a>
          <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html" target="_blank" rel="noopener noreferrer" style="display: inline-block;white-space: none;margin-top: 2px;margin-left: 3px;height: 22px !important;">
           <img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc_icon.svg" />
           <img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-by_icon.svg" />
           <img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-nc_icon.svg" />
           <img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-sa_icon.svg" />
          </a>
      </p>
    </div>
  )
}

// export functonal component
export default UnderConstruction