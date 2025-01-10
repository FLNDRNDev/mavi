import React from 'react'


const HeaderBox = ({ type = "title", title, user, subtext }: HeaderBoxProps) => {
  return (
    <div className="header-box">
        <h2 className="header-box-title">
            {title}
            {type === "greeting" && user && <span className="text-bankGradient">&nbsp;{user}</span>}
        </h2>
        <p className="header-box-subtext">
          {subtext}
        </p>
    </div>
  )
}

export default HeaderBox