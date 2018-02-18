import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header.js";
import Footer from "./components/footer.js";

import "./css/index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header brand="My First React App" subbrand="I made it and stuff"/>
        <div className="content">
          <p>
            VHS typewriter offal, tumeric gastropub fixie lomo single-origin coffee. Cold-pressed aliquip edison bulb knausgaard, viral schlitz intelligentsia godard literally culpa occupy. Cardigan listicle ut neutra laboris activated charcoal whatever. Activated charcoal meditation microdosing tempor. Esse fugiat poutine VHS franzen aesthetic stumptown XOXO quinoa cronut vegan subway tile photo booth glossier pitchfork. 8-bit trust fund man bun culpa organic. Deep v plaid single-origin coffee iPhone echo park green juice hashtag glossier lumbersexual street art hoodie. Literally hoodie enim listicle, lyft food truck poutine mollit laboris man braid. Farm-to-table et voluptate aesthetic sed plaid, unicorn velit mixtape cliche. Snackwave gluten-free fam, knausgaard intelligentsia migas cronut gentrify art party neutra. Yuccie live-edge roof party affogato seitan eiusmod fixie asymmetrical twee retro. Laboris craft beer leggings shaman polaroid edison bulb consectetur next level anim sint aliquip street art veniam.
          </p>
          <p>
            Sustainable dolore chambray forage magna in swag elit fingerstache. Pariatur tumeric iceland, deserunt enamel pin dolore esse salvia leggings yuccie austin synth veniam. Truffaut 90's plaid single-origin coffee, art party fingerstache tattooed fam celiac yr direct trade before they sold out cray raclette. Veniam ethical qui succulents proident poutine, actually ennui humblebrag hoodie nisi everyday carry DIY you probably haven't heard of them vexillologist. Narwhal post-ironic art party affogato bitters chicharrones. Fam commodo swag unicorn godard, sustainable subway tile sriracha whatever direct trade ut. Celiac put a bird on it dolore qui shoreditch ad banjo.
          </p>
        </div>
        <Footer links={[
          {
            url: "#",
            name: "Copyright"
          }, {
            url: "facebook.com",
            name: "Facebook"
          }, {
            url: "twitter.com",
            name: "Twitter"
          }
        ]}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, document.querySelector("#root"));
