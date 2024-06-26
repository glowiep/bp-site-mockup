import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Tooltip } from '@mui/material'

const GithubIcon = () => {
  return (
    <Tooltip title="View in Github">
      <div id="visit-github" type="button" >
        <a href="https://github.com/glowiep/bp-site-mockup" target="_blank" rel="noreferrer">
          <GitHubIcon color="#C52B1E" sx={{
            height: "large"
          }}/>
        </a>
      </div>
    </Tooltip>
  )
}

export default GithubIcon;