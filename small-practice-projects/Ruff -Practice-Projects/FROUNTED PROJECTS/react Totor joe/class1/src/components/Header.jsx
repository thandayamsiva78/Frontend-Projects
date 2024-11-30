export const Header = () => {
  let customeCSS = "code";
  let isLoggedIn = true; // conditional rendering.
  const greeting = isLoggedIn ? <p>Welcome Back!</p> : <p>Please Log in.</p>;

  const items = ["item 1", "item 2", "item 3", "item 4"];
  return (
    <>
      <div>
        <h1 className="bannerText">Totur Joes</h1>
        <p className="slogan">Learn more be Smart</p>

        {/* Javascript expression in JSX */}

        <p className={customeCSS}>25+75={25 + 75}</p>
        {greeting}

        {/* JSX with List */}
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

// import React from "react";

// export const Header = () => {
//     return React.createElement("div" , null , React.createElement("h1" , {className:"bannerText"} , "Tutor Joe"),
//      React.createElement("p" , {className:"slogan"},"Learn more  be Smart"))
// }
