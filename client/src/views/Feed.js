import React from "react";
import "./styles/Feed.scss";
import NavBar from "../_feed/components/NavBar";
import SideNav from "../_feed/components/SideNav";
import Post from "../_feed/components/Post";

export class Feed extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="Feed">
          <div className="Feed__sideNav">
            <SideNav />
          </div>
          <div className="Feed__feed">
            <Post
              title={"Mujo izbo hasu"}
              problem={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus tincidunt, auctor felis nec, eleifend tellus. Morbi tempus dolor eu mauris sodales, ut dignissim felis suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent odio lectus, facilisis eu condimentum at, pulvinar id velit. Suspendisse tempor est et congue placerat. Aliquam eu justo ac neque ornare posuere. Nunc pretium nulla eget lectus posuere consequat. Nulla aliquam venenatis tortor non vestibulum. Maecenas tincidunt aliquet tempor. Integer porttitor a nibh vel pharetra. Nullam sed dui nisl. "
              }
              solution={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus tincidunt, auctor felis nec, eleifend tellus. Morbi tempus dolor eu mauris sodales, ut dignissim felis suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent odio lectus, facilisis eu condimentum at, pulvinar id velit. Suspendisse tempor est et congue placerat. Aliquam eu justo ac neque ornare posuere. Nunc pretium nulla eget lectus posuere consequat. Nulla aliquam venenatis tortor non vestibulum. Maecenas tincidunt aliquet tempor. Integer porttitor a nibh vel pharetra. Nullam sed dui nisl. "
              }
              image={
                "https://i1.wp.com/dalegi.com/wp-content/uploads/sites/6/2018/04/sarajevo_air_pollution_small.jpg"
              }
            />

            <Post
              title={"Mujo izbo hasu"}
              problem={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus tincidunt, auctor felis nec, eleifend tellus. Morbi tempus dolor eu mauris sodales, ut dignissim felis suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent odio lectus, facilisis eu condimentum at, pulvinar id velit. Suspendisse tempor est et congue placerat. Aliquam eu justo ac neque ornare posuere. Nunc pretium nulla eget lectus posuere consequat. Nulla aliquam venenatis tortor non vestibulum. Maecenas tincidunt aliquet tempor. Integer porttitor a nibh vel pharetra. Nullam sed dui nisl. "
              }
              solution={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et metus tincidunt, auctor felis nec, eleifend tellus. Morbi tempus dolor eu mauris sodales, ut dignissim felis suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent odio lectus, facilisis eu condimentum at, pulvinar id velit. Suspendisse tempor est et congue placerat. Aliquam eu justo ac neque ornare posuere. Nunc pretium nulla eget lectus posuere consequat. Nulla aliquam venenatis tortor non vestibulum. Maecenas tincidunt aliquet tempor. Integer porttitor a nibh vel pharetra. Nullam sed dui nisl. "
              }
              image={
                "https://i1.wp.com/dalegi.com/wp-content/uploads/sites/6/2018/04/sarajevo_air_pollution_small.jpg"
              }
            />
          </div>
          <div className="Feed__other">
            <p>djes</p>
          </div>
        </div>
      </div>
    );
  }
}
